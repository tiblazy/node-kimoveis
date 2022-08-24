import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Address from "../entities/address.entity";
import Properties from "../entities/property.entity";
import AppError from "../errors/App.error";

const propertyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    address: { district, zipCode, city, state },
  } = req.body;

  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOneBy({
    district,
    zipCode,
    city,
    state,
  });

  if (address) {
    const propertyRepository = AppDataSource.getRepository(Properties);
    const alreadyExists = await propertyRepository.findOneBy(address);

    if (alreadyExists) throw new AppError("Property already exists");
  }

  next();
};

export default propertyExistsMiddleware;
