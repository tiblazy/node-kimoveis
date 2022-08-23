import { Request, Response, NextFunction } from "express";
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

  return res.status(500).json({ message: "Internal server error" });
};

export default handleErrorMiddleware;
