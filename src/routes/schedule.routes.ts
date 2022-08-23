import { Router } from "express";
import Schedule from "../controllers/schedule.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const schedule = Router();

schedule.post("", Schedule.calendar);

schedule.get("/properties/:id", authTokenMiddleware, Schedule.list);

export default schedule;
