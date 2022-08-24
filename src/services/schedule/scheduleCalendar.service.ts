import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedule.entity";
import AppError from "../../errors/App.error";
import { IScheduleRequest } from "../../interfaces/schedules";

const scheduleCalendarService = async (
  scheduleData: IScheduleRequest
): Promise<void> => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const schedule = scheduleRepository.create(scheduleData);
  await scheduleRepository.save(scheduleData);

  if (!schedule) throw new AppError("Invalid id", 401);
};

export default scheduleCalendarService;
