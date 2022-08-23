import { Router } from "express";
import Property from "../controllers/property.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const property = Router();

property.post("", authTokenMiddleware, Property.create);

property.get("", Property.read);

export default property;
