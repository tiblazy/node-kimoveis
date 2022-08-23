import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Categories from "../entities/category.entity";
import AppError from "../errors/App.error";

const categoryAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const categoryRepository = AppDataSource.getRepository(Categories);
  const alreadyExists = await categoryRepository.findOne({ where: { name } });

  if (alreadyExists) {
    throw new AppError("Category already exists", 401);
  }

  next();
};

export default categoryAlreadyExistsMiddleware;
