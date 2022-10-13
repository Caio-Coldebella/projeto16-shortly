import connection from "../database/database.js";

export async function postshortenurlMiddleware(req,res,next){
    const auth = req.headers.authorization?req.headers.authorization.replace('Bearer ',''):null;
    const body = req.body;
    if(auth === null){
        res.sendStatus(401);
        return;
    }
    var urlexpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var urlmatch = new RegExp(urlexpression);
    if (typeof body.url != 'string' || !body.url.match(urlmatch)) {
        res.sendStatus(422);
        return;
    }
    try {
        const token = await connection.query('SELECT * FROM authorizations WHERE token=$1',[auth]);
        if(token.rows.length === 0){
            res.sendStatus(401);
            return;
        }
        res.locals.id = token.rows[0].userId;
        res.locals.url = body.url;
        next();
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}