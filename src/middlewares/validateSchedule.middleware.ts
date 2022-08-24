import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Properties from "../entities/property.entity";
import AppError from "../errors/App.error";

const validateScheduleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { propertyId, hour, date } = req.body;

  if (propertyId.length < 36) throw new AppError("Invalid property id", 404);

  const propertyRepository = AppDataSource.getRepository(Properties);
  const property = await propertyRepository.findOne({
    where: { id: propertyId },
  });

  if (!property) throw new AppError("Invalid property id", 404);

  const validateHour = hour.split(":");

  if ((validateHour[0].length && validateHour[1].length) !== 2)
    throw new AppError("Invalid hour format");

  next();
};

const validateScheduleListMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (id.length < 36) throw new AppError("Invalid a id", 404);

  const propertyRepository = AppDataSource.getRepository(Properties);
  const property = await propertyRepository.findOne({
    where: { id },
  });

  if (!property) throw new AppError("Invalid b id", 404);

  next();
};
export { validateScheduleMiddleware, validateScheduleListMiddleware };
