import query from '../Database/DB_Con.js';
import jwt from 'jsonwebtoken';

// const admin = async (req, res, next) => {
//     try {
//         const { token } = req.headers;
//         const sql = "SELECT * FROM user WHERE token = ?";
//         const result = await query(sql, [token]);
//         if (result[0] && result[0].type === 1) {
//             next();
//         } else {
//             res.status(401).json({msg: "you are not authorized to access this route !",});
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("admin Error");
//     }
// }

const key = "secretkey";


const admin = async (req, res, next) => {
    try {
        let token = req.headers.authorization;


        if (!token) {
            return res.status(401).json({ admin: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            let authUser = jwt.verify(token, key);
            req.authUserid = authUser.user_id;
        }
        next();
    } catch (err) {
        return res.status(500).json("Admin Error");
    }
}


export default admin;