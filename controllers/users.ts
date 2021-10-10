import { Request, Response } from "express";
import { Server } from "../server";
import { Methods } from "../constants/methods";
import { USER_ROUTES } from "../routes/users";

const { Get, Post } = Methods;
const { MY_PROFILE, USER_BY_ID } = USER_ROUTES;

class UserControllerBase {
  public init(): void {
    Server.handleRoute(Get, MY_PROFILE, this.getOwnProfile);
    Server.handleRoute(Post, MY_PROFILE, this.setOwnProfile);
    Server.handleRoute(Get, USER_BY_ID, this.getUserById);
  }

  public getOwnProfile(req: Request, res: Response): void {
    res.json({ profile: "my" });
  }

  public setOwnProfile(req: Request, res: Response): void {
    res.json({ profile: "set profile" });
  }

  public getUserById(req: Request, res: Response): void {
    const { userId } = req.params;
    res.json({ message: `requested user: ${userId}` });
  }
}

export const UserController = new UserControllerBase();
