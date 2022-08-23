import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedule.entity";
import AppError from "../../errors/App.error";
import { IScheduleRequest } from "../../interfaces/schedules";

const scheduleCalendarService = async (
  scheduleData: IScheduleRequest
): Promise<IScheduleRequest> => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const schedule = scheduleRepository.create(scheduleData);
  await scheduleRepository.save(scheduleData);
  //   if (!isAdm) throw new AppError("Invalid Access", 401);

  //   if (!schedule) throw new AppError("Invalidi id", 401);

  return schedule;
};

export default scheduleCalendarService;
