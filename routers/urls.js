import { Router } from "express";
import { deleteurlController, getshorturlbyidController, postshortenurlController, returnshorturlController } from "../controllers/urlsController.js";
import { deleteurlMiddleware, postshortenurlMiddleware } from "../middlewares/urlsMiddleware.js";

const urls = Router();
urls.post('/urls/shorten',postshortenurlMiddleware,postshortenurlController);
urls.get('/urls/:id',getshorturlbyidController);
urls.get('/urls/open/:shortUrl',returnshorturlController);
urls.delete('/urls/:id',deleteurlMiddleware,deleteurlController);
export default urls;