import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import "dotenv/config";
import AppError from "../../errors/App.error";

const sessionSignInService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email } });

  if (!user) throw new AppError("Invalid email or password", 401);

  if (!user.isActive) throw new AppError("Invalid user", 401);

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) throw new AppError("Invalid email or password", 401);

  const token = jwt.sign(
    { isAdm: user.isAdm },
    process.env.SECRET_KEY as string,
    { subject: user.id, expiresIn: "2h" }
  );

  return token;
};

export default sessionSignInService;
