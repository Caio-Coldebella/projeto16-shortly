import connection from "../database/database.js";
import Joi from "joi";
import bcrypt from "bcrypt";

export async function signupMiddleware(req,res,next){
    const data = req.body;
    const postSchema = Joi.object({
        name: Joi.string().min(1).required(),
        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string().min(1).required(),
        confirmPassword: Joi.string().min(1).required()
    });
    const validate = postSchema.validate(data);
    if(validate.error || !(data.password===data.confirmPassword)){
        res.sendStatus(422);
        return;
    }
    try {
        const result = await connection.query('SELECT * FROM users');
        const hasequal = result.rows?result.rows.find((item)=> item.email === data.email):undefined;
        if(hasequal){
            res.sendStatus(409);
            return;
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    res.locals.data = data;
    next();
}

export async function signinMiddleware(req,res,next){
    const data = req.body;
    const postSchema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string().min(1).required(),
    });
    const validate = postSchema.validate(data);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    try {
        const user = await connection.query('SELECT (password) FROM users WHERE email=$1',[data.email]);
        if(user.rows.length === 0 || !bcrypt.compareSync(data.password,user.rows[0].password)){
            res.sendStatus(401);
            return;
        }
        next();
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}