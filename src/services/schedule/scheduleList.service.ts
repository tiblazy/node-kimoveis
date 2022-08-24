import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedule.entity";
import AppError from "../../errors/App.error";

const scheduleIndexService = async (
  isAdm: boolean,
  userId: string,
  id: string
) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const schedule = await scheduleRepository.findOne({ where: { id } });
  const isOwner = await scheduleRepository.findOne({ where: { userId } });

  if (!isAdm && !isOwner) throw new AppError("Invalid Access", 403);

  if (!schedule) throw new AppError("Invalid id", 404);

  return schedule || isOwner;
};

export default scheduleIndexService;
