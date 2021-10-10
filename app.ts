import { Server } from "./server";
import { UserController } from "./controllers/users";

UserController.init();

Server.listen();
