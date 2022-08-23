import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/App.error";

const userDeleteService = async (
  isAdm: boolean,
  id: string
): Promise<boolean> => {
  if (!isAdm) {
    throw new AppError("Invalid Permission", 403);
  }

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError("User not found", 404);

  if (!user.isActive) throw new AppError("User already inactived", 400);

  const userDesactive = (user.isActive = false);
  const userUpdate = Object.assign(user!, userDesactive);

  await userRepository.update(id, userUpdate);

  return true;
};

export default userDeleteService;
