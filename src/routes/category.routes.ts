import { Router } from "express";
import Category from "../controllers/category.controller";

const category = Router();

category.post("", Category.create);

category.get("/:id/properties", Category.read);

export default category;
