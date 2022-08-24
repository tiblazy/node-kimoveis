import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import SchedulesUsersProperties from "../entities/schedule.entity";
import AppError from "../errors/App.error";

const scheduleAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { propertyId, date, hour } = req.body;

  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const alreadyExists = await scheduleRepository.findOne({
    where: { propertyId, date, hour },
  });

  if (alreadyExists) throw new AppError("User schedule already exists");

  next();
};

export default scheduleAlreadyExistsMiddleware;
