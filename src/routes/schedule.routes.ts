import { Router } from "express";
import Schedule from "../controllers/schedule.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import scheduleAlreadyExistsMiddleware from "../middlewares/scheduleAlreadyExists.middleware";
import {
  validateScheduleMiddleware,
  validateScheduleListMiddleware,
} from "../middlewares/validateSchedule.middleware";

const schedule = Router();

schedule.post(
  "",
  authTokenMiddleware,
  validateScheduleMiddleware,
  scheduleAlreadyExistsMiddleware,
  Schedule.calendar
);

schedule.get(
  "/properties/:id",
  authTokenMiddleware,
  validateScheduleListMiddleware,
  Schedule.list
);

export default schedule;
