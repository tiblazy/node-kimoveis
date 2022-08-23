import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import { ICategory } from "../../interfaces/categories";

const categoryListService = async (): Promise<ICategory[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categoryList = await categoryRepository.find();

  return categoryList;
};
export default categoryListService;
