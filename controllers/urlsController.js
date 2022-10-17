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

export async function getshorturlbyidController(req,res){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.sendStatus(404);
        return;
    }
    try {
        const urlrequested = await connection.query('SELECT * FROM urls WHERE id=$1',[id]);
        if(urlrequested.rows.length === 0){
            res.sendStatus(404);
            return;
        }
        const objreturn = {
            id: id,
            shortUrl: urlrequested.rows[0].shortUrl,
            url: urlrequested.rows[0].url
        };
        res.send(objreturn).status(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function returnshorturlController(req,res){
    const url = String(req.params.shortUrl);
    try {
        const shorturl = await connection.query('SELECT * FROM urls WHERE "shortUrl"=$1',[url]);
        if(shorturl.rows.length === 0){
            res.sendStatus(404);
            return;
        }
        const urlredirect = shorturl.rows[0].url;
        await connection.query('UPDATE urls SET "visitCount"="visitCount"+1 WHERE id=$1',[shorturl.rows[0].id]);
        res.status(302).redirect(urlredirect);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function deleteurlController(req,res){
    const id = res.locals.id;
    try {
        await connection.query('DELETE FROM "userUrls" WHERE "urlId"=$1',[id]);
        await connection.query('DELETE FROM "urls" WHERE id=$1',[id]);
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}