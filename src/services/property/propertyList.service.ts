import AppDataSource from "../../data-source";
import Properties from "../../entities/property.entity";

const propertyListService = async () => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const propertyList = await propertyRepository.find();

  return propertyList;
};
export default propertyListService;
