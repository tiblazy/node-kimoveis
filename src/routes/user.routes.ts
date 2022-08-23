import { Router } from "express";
import User from "../controllers/user.controller";

import emailAlreadyExistsMiddleware from "../middlewares/emailAlreadyExists.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const user = Router();

user.post("", emailAlreadyExistsMiddleware, User.create);

user.get("", User.list);

user.delete("/:id", authTokenMiddleware, User.delete);

export default user;
