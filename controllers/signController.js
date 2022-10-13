import connection from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';

export async function signupController(req,res){
    const data = res.locals.data;
    const hashpass = bcrypt.hashSync(data.password,10);
    try {
        await connection.query('INSERT INTO users (name,email,password) VALUES ($1,$2,$3)',
        [data.name,data.email,hashpass]);
        res.sendStatus(201);   
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function signinController(req,res){
    const data = res.locals.data;
    const tk = uuid();
    try {
        const id  = await connection.query('SELECT id FROM users WHERE email=$1',[data.email]);
        const numid = id.rows[0].id;
        await connection.query('INSERT INTO authorizations ("userId",token) VALUES ($1,$2)',[numid,tk]);
        res.status(200).send({token: tk});        
    } catch (error) {
        
    }
}