import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Categories from "../entities/category.entity";
import AppError from "../errors/App.error";

const categoryAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;
  const { name } = req.body;

  if (!isAdm) throw new AppError("User is not admin", 403);

  const categoryRepository = AppDataSource.getRepository(Categories);
  const alreadyExists = await categoryRepository.findOne({ where: { name } });

  if (alreadyExists) throw new AppError("Category already exists");

  next();
};

export default categoryAlreadyExistsMiddleware;
