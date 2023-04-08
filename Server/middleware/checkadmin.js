import query from '../Database/DB_Con.js';

const admin = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const sql = "SELECT * FROM user WHERE token = ?";
        const result = await query(sql, [token]);
        if (result[0] && result[0].type === 1) {
            next();
        } else {
            res.status(401).json({msg: "you are not authorized to access this route !",});
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("admin Error");
    }
}

export default admin;