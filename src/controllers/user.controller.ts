import { Request, Response } from "express";
import userCreateService from "../services/user/userCreate.service";
import userDeleteService from "../services/user/userDelete.service";
import userReadService from "../services/user/userRead.service";

export default class User {
  static create = async (req: Request, res: Response) => {
    const userData = req.body;
    const user = await userCreateService(userData);

    return res.status(201).json(user);
  };

  static list = async (req: Request, res: Response) => {
    const users = await userReadService();

    return res.status(200).json(users);
  };

  static delete = async (req: Request, res: Response) => {
    const { isAdm } = req.user;
    const { id } = req.params;

    await userDeleteService(isAdm, id);

    return res.status(200).json();
  };
}
