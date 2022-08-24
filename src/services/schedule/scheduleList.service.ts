import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import Properties from "../../entities/property.entity";
import SchedulesUsersProperties from "../../entities/schedule.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/App.error";

const scheduleIndexService = async (
  isAdm: boolean,
  userId: string,
  id: string
) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  if (!isAdm) throw new AppError("User is not admin", 403);

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  const userShown: Partial<User> = user;
  delete userShown.password;

  const propertyRepository = AppDataSource.getRepository(Properties);
  const property = await propertyRepository.findOneBy({ id });
  if (!property) throw new AppError("Property not found", 404);

  const schedulesFind = await scheduleRepository.find({
    where: { userId },
  });
  const schedules = [...schedulesFind];

  const schedulesDetails: any = schedules;
  schedulesDetails.map((scheduleDetail: any) => {
    delete scheduleDetail.propertyId;
    delete scheduleDetail.userId;
    scheduleDetail.user = user;
  });

  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOneBy({});

  return { ...property, schedules: schedulesDetails, category };
};

export default scheduleIndexService;
