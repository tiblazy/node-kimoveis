import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest, IUserShown } from "../../interfaces/users";
import { hash } from "bcrypt";

const userCreateService = async (
  userData: IUserRequest
): Promise<IUserShown> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(userData.password, 10);

  const userCreate = userRepository.create({
    ...userData,
    password: hashedPassword,
  });
  await userRepository.save(userCreate);

  const userShown: IUserShown = userCreate;
  delete userShown.password;

  return userShown;
};

export default userCreateService;
