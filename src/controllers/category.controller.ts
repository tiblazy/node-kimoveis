import { Request, Response } from "express";
import categoryCreateService from "../services/category/categoryCreate.service";
import categoryListService from "../services/category/categoryList.service";
import categoryIndexService from "../services/category/categoryIndex.service";

export default class Category {
  static create = async (req: Request, res: Response) => {
    const categoryData = req.body;

    const category = await categoryCreateService(categoryData);

    return res.status(201).json(category);
  };

  static list = async (req: Request, res: Response) => {
    const categoryList = await categoryListService();

    return res.status(200).json(categoryList);
  };

  static index = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await categoryIndexService(id);

    return res.status(200).json(category);
  };
}
