import { Router } from "express";
import sign from "./sign.js";
import urls from "./urls.js";
import users from "./users.js";

const router = Router();
router.use(sign);
router.use(urls);
router.use(users);
export default router;