import Properties from "../../entities/property.entity";

export interface ICategoryRequest {
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ICategoryProperties extends ICategory {
  properties: Properties[];
}
