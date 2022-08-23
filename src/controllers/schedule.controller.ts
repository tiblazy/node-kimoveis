import { Request, Response } from "express";
import scheduleCalendarService from "../services/schedule/scheduleCalendar.service";
import scheduleIndexService from "../services/schedule/scheduleList.service";
export default class Schedule {
  static calendar = async (req: Request, res: Response) => {
    const scheduleData = req.body;
    const schedule = await scheduleCalendarService(scheduleData);

    return res.status(201).json(schedule);
  };

  static list = async (req: Request, res: Response) => {
    const { isAdm } = req.user;
    const { id } = req.params;

    const schedules = await scheduleIndexService(isAdm, id);

    return res.status(200).json(schedules);
  };
}
