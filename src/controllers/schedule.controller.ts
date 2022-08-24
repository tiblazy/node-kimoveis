import { Request, Response } from "express";
import scheduleCalendarService from "../services/schedule/scheduleCalendar.service";
import scheduleIndexService from "../services/schedule/scheduleList.service";
export default class Schedule {
  static calendar = async (req: Request, res: Response) => {
    const { userId } = req.user;
    const scheduleData = req.body;
    const schedule = { userId, ...scheduleData };

    await scheduleCalendarService(schedule);

    return res.status(201).json({ message: "Schedule created" });
  };

  static list = async (req: Request, res: Response) => {
    const { isAdm, userId } = req.user;
    const { id } = req.params;

    const schedules = await scheduleIndexService(isAdm, userId, id);

    return res.status(200).json(schedules);
  };
}
