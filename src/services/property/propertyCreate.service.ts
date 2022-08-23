import AppDataSource from "../../data-source";
import { IPropertyRequest } from "../../interfaces/properties";
import AppError from "../../errors/App.error";
import Properties from "../../entities/property.entity";

const propertyCreateService = async (
  isAdm: boolean,
  propertyData: IPropertyRequest
) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const propertyCreated = propertyRepository.create(propertyData);
  await propertyRepository.save(propertyCreated);

  if (!isAdm) throw new AppError("Invalid Permission", 401);

  return true;
  // return propertyCreated;
};
export default propertyCreateService;
// : Promise<IPropertyRequest>
