import connection from "../database/database.js";

export async function getrankingController(req,res){
    try {
        const rank = await connection.query('SELECT users.id,users.name,COUNT(u."userId") as "linksCount",SUM(urls."visitCount") as "visitCount" FROM users JOIN "userUrls" u ON users.id=u."userId" JOIN urls ON u."urlId"=urls.id GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10;');
        res.send(rank.rows).status(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}