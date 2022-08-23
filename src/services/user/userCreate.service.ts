import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";

const userCreateService = async (userData: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  userData.password = await hash(userData.password, 10);

  const userCreate = userRepository.create(userData);
  await userRepository.save(userCreate);
  delete userCreate.password;

  return userCreate;
};

export default userCreateService;
