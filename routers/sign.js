import { Router } from "express";
import { signinController, signupController } from "../controllers/signController.js";
import { signinMiddleware, signupMiddleware } from "../middlewares/signinMiddleware.js";

const sign = Router();
sign.post('/signup',signupMiddleware,signupController);
sign.post('/signin',signinMiddleware,signinController);
export default sign