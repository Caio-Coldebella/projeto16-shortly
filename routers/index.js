import { Router } from "express";
import connection from "../database/database.js";

const router = Router();
router.get('/',async (req,res)=>{
    try {
        const result = await connection.query('SELECT * FROM users');
        res.send(result.rows);   
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});
export default router;