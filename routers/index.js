import { Router } from "express";
import ranking from "./ranking.js";
import sign from "./sign.js";
import urls from "./urls.js";
import users from "./users.js";

const router = Router();
router.use(sign);
router.use(urls);
router.use(users);
router.use(ranking);
export default router;