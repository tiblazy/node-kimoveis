import { Request, Response, NextFunction, json } from "express";
import AppError from "../errors/App.error";

const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }
};

export default handleErrorMiddleware;
