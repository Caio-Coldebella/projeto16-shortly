import { Router } from "express";
import connection from "../database/database.js";
import sign from "./sign.js";

const router = Router();
router.use(sign);
export default router;