import query from '../Database/DB_Con.js';


const user = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const sql = "SELECT * FROM user WHERE token = ?";
        const result = await query(sql, [token]);
        if (result[0] && result[0].type === 0) {
            res.locals.user = result[0];
            next();
        } else {
            res.status(401).send("Unauthorized");
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("user Error");
    }
}

export default user;