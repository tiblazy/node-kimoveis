import { Request, Response } from "express";
import propertyCreateService from "../services/property/propertyCreate.service";
import propertyListService from "../services/property/propertyList.service";

export default class Property {
  static create = async (req: Request, res: Response) => {
    const { isAdm } = req.user;
    const propertyData = req.body;
    const property = await propertyCreateService(isAdm, propertyData);

    return res.status(201).json(property);
  };

  static read = async (req: Request, res: Response) => {
    const properties = await propertyListService();

    return res.status(200).json(properties);
  };
}
