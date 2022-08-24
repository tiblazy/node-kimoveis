import AppDataSource from "../../data-source";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import AppError from "../../errors/App.error";
import Properties from "../../entities/property.entity";
import Address from "../../entities/address.entity";
import Categories from "../../entities/category.entity";

const propertyCreateService = async (
  isAdm: boolean,
  propertyData: IPropertyRequest,
  addressData: IAddressRequest
) => {
  if (!isAdm) throw new AppError("Invalid Permission", 403);

  const addressRepository = AppDataSource.getRepository(Address);
  const address = addressRepository.create(addressData);
  await addressRepository.save(address);

  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({
    where: { id: propertyData.categoryId },
  });

  const propertyRepository = AppDataSource.getRepository(Properties);
  const property = propertyRepository.create({
    value: propertyData.value,
    size: propertyData.size,
    address,
  });
  const propertyCreated = await propertyRepository.save(property);

  if (!category) throw new AppError("Invalid category", 404);

  return { category: propertyData.categoryId, ...propertyCreated };
};
export default propertyCreateService;
