import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Categories from "../entities/category.entity";
import Properties from "../entities/property.entity";
import AppError from "../errors/App.error";

const propertyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    categoryIdId,
    address: { district, zipCode, city, state },
  } = req.body;

  if (categoryIdId && categoryIdId.length < 36)
    throw new AppError("Invalid category id", 404);

  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Address);

  const alreadyExists = await addressRepository.findOne({
    where: { district, zipCode, city, state },
  });

  if (alreadyExists) throw new AppError("Property already exists");

  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({
    where: { id: categoryIdId },
  });

  if (!category) throw new AppError("Invalid category", 404);

  next();
};

export default propertyExistsMiddleware;
