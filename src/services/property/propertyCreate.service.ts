import AppDataSource from "../../data-source";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import AppError from "../../errors/App.error";
import Properties from "../../entities/property.entity";
import Address from "../../entities/address.entity";
import Categories from "../../entities/category.entity";

const propertyCreateService = async (
  propertyData: IPropertyRequest,
  addressData: IAddressRequest
) => {
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

  if (category) property.category = category;

  const propertyCreated = await propertyRepository.save(property);

  if (!category) throw new AppError("Invalid category", 404);

  return { ...propertyCreated };
};
export default propertyCreateService;
