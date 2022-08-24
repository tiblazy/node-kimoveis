import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/App.error";
import { IUser } from "../../interfaces/users";

const userListService = async (isAdm: boolean): Promise<IUser[]> => {
  if (!isAdm) throw new AppError("User is not admin", 403);

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find();

  const users: IUser[] = user;
  users.map((user) => delete user.password);

  return users;
};

export default userListService;
