import * as express from "express";
import {
  IUserCreate,
  IUserUpdate,
} from "../../src/interfaces/user/user.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        userId: string;
        isAdm: boolean;
      };
    }
  }
}
