import { Router } from "express";
import Category from "../controllers/category.controller";

import authTokenMiddleware from "../middlewares/authToken.middleware";
import categoryAlreadyExistsMiddleware from "../middlewares/categoryAlreadyExists.middleware copy";

const category = Router();

category.post(
  "",
  authTokenMiddleware,
  categoryAlreadyExistsMiddleware,
  Category.create
);

category.get("/", Category.list);
category.get("/:id/properties", Category.index);

export default category;
