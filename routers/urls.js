import { Router } from "express";
import { getshorturlbyidController, postshortenurlController } from "../controllers/urlsController.js";
import { postshortenurlMiddleware } from "../middlewares/urlsMiddleware.js";

const urls = Router();
urls.post('/urls/shorten',postshortenurlMiddleware,postshortenurlController);
urls.get('/urls/:id',getshorturlbyidController);
export default urls;