import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const userDeleteService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ id });

  const userDesactive = (user.isActive = false);
  await userRepository.update(userDesactive);

  return user;
};

export default userDeleteService;
