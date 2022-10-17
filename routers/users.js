import { Router } from "express";
import { getuserController } from "../controllers/usersController.js";
import { getuserMiddleware } from "../middlewares/usersMiddleware.js";

const users = Router();
users.get('/users/me',getuserMiddleware,getuserController);
export default users;