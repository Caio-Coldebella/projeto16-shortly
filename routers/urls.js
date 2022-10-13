import { Router } from "express";
import { postshortenurlController } from "../controllers/urlsController.js";
import { postshortenurlMiddleware } from "../middlewares/urlsMiddleware.js";

const urls = Router();
urls.post('/urls/shorten',postshortenurlMiddleware,postshortenurlController);
export default urls;