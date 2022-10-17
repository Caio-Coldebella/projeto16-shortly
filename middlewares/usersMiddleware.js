import connection from "../database/database.js"

export async function getuserMiddleware(req,res,next){
    const auth = req.headers.authorization?req.headers.authorization.replace('Bearer ',''):null;
    if(auth === null){
        res.sendStatus(401);
        return;
    }
    try {
        const token = await connection.query('SELECT * FROM authorizations WHERE token=$1',[auth]);
        if(token.rows.length === 0){
            res.sendStatus(404);
            return;
        }
        res.locals.id = token.rows[0].userId;
        next();
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}