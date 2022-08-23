import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";

const userReadService = async (): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const userList = users.map((currentUser: IUser) => currentUser);

  return userList;
};

export default userReadService;
