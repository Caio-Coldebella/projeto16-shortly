import connection from "../database/database.js";
import bcrypt from "bcrypt";

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
    return null;
}