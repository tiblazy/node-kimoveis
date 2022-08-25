import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import AppError from "../../errors/App.error";

const sessionSignInService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) throw new AppError("Invalid credentials", 401);
  if (!user.isActive) throw new AppError("User is not active");

  const matchPassword = await compare(password, user.password);
  if (!matchPassword) throw new AppError("Invalid credentials", 403);

  const token = jwt.sign(
    { isAdm: user.isAdm },
    process.env.SECRET_KEY as string,
    { subject: user.id, expiresIn: "24h" }
  );

  return token;
};

export default sessionSignInService;
