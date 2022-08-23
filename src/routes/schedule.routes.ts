import { Router } from "express";
import Schedule from "../controllers/schedule.controller";

const schedule = Router();

schedule.post("", Schedule.calendar);

schedule.get("/properties/:id", Schedule.read);

export default schedule;
