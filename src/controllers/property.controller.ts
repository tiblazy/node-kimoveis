import { Request, Response } from "express";
import propertyCreateService from "../services/property/propertyCreate.service";
import propertyListService from "../services/property/propertyList.service";

export default class Property {
  static create = async (req: Request, res: Response) => {
    const { value, size, address, categoryId } = req.body;
    const { district, zipCode, number, city, state } = address;

    const property = await propertyCreateService(
      { value, size, address, categoryId },
      { district, zipCode, number, city, state }
    );

    return res.status(201).json(property);
  };

  static read = async (req: Request, res: Response) => {
    const properties = await propertyListService();

    return res.status(200).json(properties);
  };
}
