import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import AppError from "../../errors/App.error";
import { ICategory, ICategoryRequest } from "../../interfaces/categories";

const categoryCreateService = async (
  isAdm: boolean,
  categoryData: ICategoryRequest
): Promise<ICategory> => {
  if (!isAdm) throw new AppError("User is not admin", 403);

  const categoryRepository = AppDataSource.getRepository(Categories);
  const categoryCreated = categoryRepository.create(categoryData);
  await categoryRepository.save(categoryCreated);

  return categoryCreated;
};
export default categoryCreateService;
