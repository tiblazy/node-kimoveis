import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import Properties from "../../entities/property.entity";
import AppError from "../../errors/App.error";
import { ICategoryProperties } from "../../interfaces/categories";

const categoryIndexService = async (
  id: string
): Promise<ICategoryProperties> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({ where: { id } });

  if (!id || !category) throw new AppError("Invalid category id", 404);

  const propertyRepository = AppDataSource.getRepository(Properties);
  const property = await propertyRepository.find({ where: { id } });

  console.log(property);

  return { ...category, properties: property };
};
export default categoryIndexService;
