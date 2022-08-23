import { Router } from "express";
import Property from "../controllers/property.controller";

const property = Router();

property.post("", Property.create);

property.get("", Property.read);

export default property;
