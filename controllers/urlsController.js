import { nanoid } from 'nanoid'
import connection from '../database/database.js';

export async function postshortenurlController(req,res){
    const id = res.locals.id;
    const url = res.locals.url;
    const shorturl = nanoid(8);
    try {
        await connection.query('INSERT INTO urls (url,"shortUrl") VALUES ($1,$2)',[url,shorturl]);
        const inserted = await connection.query('SELECT id FROM urls WHERE url=$1',[url]);
        const idurl = inserted.rows[0].id;
        await connection.query('INSERT INTO "userUrls" ("userId","urlId") VALUES ($1,$2)',[id,idurl]);
        res.send({"shortUrl": shorturl}).status(201);   
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}