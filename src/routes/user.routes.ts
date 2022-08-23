import { Router } from "express";
import User from "../controllers/user.controller";

const user = Router();

user.post("", User.create);

user.post("", User.read);

user.post("/:id", User.delete);

export default user;
