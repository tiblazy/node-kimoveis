import { Router } from "express";
import Property from "../controllers/property.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import propertyExistsMiddleware from "../middlewares/propertyAlreadyExists.middleware";
import validateAddressMiddleware from "../middlewares/validateProperty.middleware";

const property = Router();

property.post(
  "",
  authTokenMiddleware,
  propertyExistsMiddleware,
  validateAddressMiddleware,
  Property.create
);

property.get("", Property.read);

export default property;
