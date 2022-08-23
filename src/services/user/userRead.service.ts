import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserShown } from "../../interfaces/users";

const userReadService = async (): Promise<IUserShown[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find();

  const users: IUserShown[] = user;
  users.map((user) => delete user.password);

  return users;
};

export default userReadService;
