import { Router } from "express";
import { getrankingController } from "../controllers/rankingController.js";

const ranking = Router();
ranking.get('/ranking',getrankingController);
export default ranking;