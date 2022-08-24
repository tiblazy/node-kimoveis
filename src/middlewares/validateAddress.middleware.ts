import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Categories from "../entities/category.entity";
import AppError from "../errors/App.error";

const validateAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;
  const { categoryId, address } = req.body;

  if (!isAdm) throw new AppError("User is not admin", 403);

  if (!address.district || !address.zipCode || !address.city || !address.state)
    throw new AppError("Invalid address");

  if (address.state.length > 2) throw new AppError("Invalid state");
  if (address.zipCode.length > 8) throw new AppError("Invalid zip code");

  if (categoryId && categoryId.length < 36)
    throw new AppError("Category not found", 404);

  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({
    where: { id: categoryId },
  });

  const addressRepository = AppDataSource.getRepository(Address);
  const addressFind = await addressRepository.findOneBy(address);

  if (addressFind) {
    if (!category) throw new AppError("Invalid category", 404);

    throw new AppError("Address already exists");
  }

  next();
};

export default validateAddressMiddleware;
