import { Router } from "express";
import connection from "../database/database.js";
import sign from "./sign.js";
import urls from "./urls.js";

const router = Router();
router.use(sign);
router.use(urls);
export default router;