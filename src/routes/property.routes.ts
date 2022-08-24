import { Router } from "express";
import Property from "../controllers/property.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import propertyExistsMiddleware from "../middlewares/propertyAlreadyExists.middleware";
import validateAddressMiddleware from "../middlewares/validateAddress.middleware";

const property = Router();

property.post(
  "",
  authTokenMiddleware,
  validateAddressMiddleware,
  propertyExistsMiddleware,
  Property.create
);

property.get("", Property.read);

export default property;
