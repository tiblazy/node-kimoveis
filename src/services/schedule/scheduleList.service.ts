import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedule.entity";
import AppError from "../../errors/App.error";

const scheduleIndexService = (isAdm: boolean, id: string) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const schedule = scheduleRepository.findOne({ where: { id } });

  if (!isAdm) throw new AppError("Invalid Access", 401);

  if (!schedule) throw new AppError("Invalidi id", 401);

  return schedule;
};

export default scheduleIndexService;
