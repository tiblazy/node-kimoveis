import { Router } from "express";
import Session from "../controllers/session.controller";

const session = Router();

session.post("", Session.signIn);

export default session;
