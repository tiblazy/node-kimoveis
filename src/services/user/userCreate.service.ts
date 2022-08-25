import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest, IUser } from "../../interfaces/users";
import { hash } from "bcryptjs";

const userCreateService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(userData.password, 10);

  const userCreate = userRepository.create({
    ...userData,
    password: hashedPassword,
  });
  const userShown: IUser = await userRepository.save(userCreate);
  delete userShown.password;

  return userShown;
};

export default userCreateService;
