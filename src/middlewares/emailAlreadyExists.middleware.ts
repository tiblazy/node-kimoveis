import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import AppError from "../errors/App.error";

const emailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const alreadyExists = await userRepository.findOne({ where: { email } });

  if (alreadyExists) throw new AppError("User already exists");

  next();
};

export default emailAlreadyExistsMiddleware;
