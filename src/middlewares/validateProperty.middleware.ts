import { Request, Response, NextFunction } from "express";
import AppError from "../errors/App.error";

const validateAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    address: { district, zipCode, city, state },
  } = req.body;

  if (!district || !zipCode || !city || !state)
    throw new AppError("Invalid address");

  if (state.length > 2) throw new AppError("Invalid state");
  if (zipCode.length > 8) throw new AppError("Invalid zipCode");
  next();
};

export default validateAddressMiddleware;
