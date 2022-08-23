import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import AppError from "../../errors/App.error";
import { ICategory } from "../../interfaces/categories";

const categoryIndexService = async (id: string): Promise<ICategory> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({ where: { id } });

  if (!id || !category) {
    throw new AppError("Invalid category id", 404);
  }

  return category;
};
export default categoryIndexService;
