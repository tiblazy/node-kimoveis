import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/App.error";
import { IUserShown } from "../../interfaces/users";

const userListService = async (isAdm: boolean): Promise<IUserShown[]> => {
  if (!isAdm) throw new AppError("Invalid Access", 403);

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find();

  const users: IUserShown[] = user;
  users.map((user) => delete user.password);

  return users;
};

export default userListService;
