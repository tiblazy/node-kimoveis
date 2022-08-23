import { Request, Response } from "express";
import sessionSignInService from "../services/session/sessionSignIn.service";

export default class Session {
  static signIn = async (req: Request, res: Response) => {
    const userData = req.body;
    const userSignIn = await sessionSignInService(userData);

    return res.status(200).json(userSignIn);
  };
}
