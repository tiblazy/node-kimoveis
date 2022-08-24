import { Request, Response, NextFunction } from "express";
import AppError from "../errors/App.error";
import jwt from "jsonwebtoken";

const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) throw new AppError("Invalid Token", 401);

  if (token.includes("Bearer")) token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Invalid Token", 401);
      }

      req.user = {
        isAdm: decoded.isAdm,
      };

      next();
    }
  );
};

export default authTokenMiddleware;
