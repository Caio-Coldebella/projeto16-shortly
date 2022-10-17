import connection from "../database/database.js"

export async function getuserController(req,res){
    const id = res.locals.id;
    try {
        const userinfo = await connection.query('SELECT users.id,users.name,SUM(urls."visitCount") as "visitCount" FROM users JOIN "userUrls" u ON users.id=u."userId" JOIN urls ON u."urlId"=urls.id WHERE users.id=$1 GROUP BY users.id;',[id]);
        const urlsinfo = await connection.query('SELECT urls.id,urls."shortUrl",urls.url,urls."visitCount" FROM "userUrls" u JOIN urls ON u."urlId"=urls.id WHERE u."userId"=$1;',[id]);
        const objreturn = {
            "id": userinfo.rows[0].id,
            "name": userinfo.rows[0].name,
            "visitCount": userinfo.rows[0].visitCount,
            "shortenedUrls": urlsinfo.rows
        };
        res.send(objreturn).status(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}