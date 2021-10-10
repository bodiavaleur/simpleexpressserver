import express from "express";
import { UserRouteType } from "./routes/users";
import { Methods } from "./constants/methods";
import { RouteHandler } from "./helpers/types";

// TODO: get port from .env
const PORT = 5000;

class ServerBase {
  constructor(public app = express(), public port = PORT) {}

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`[*] Server is running on: ${this.port}`);
    });
  }

  public handleRoute(
    method: Methods,
    route: UserRouteType,
    handler: RouteHandler
  ) {
    this.app[method](route, handler);
  }
}

export const Server = new ServerBase();
