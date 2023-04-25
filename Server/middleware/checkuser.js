import express from 'express';
import jwt from 'jsonwebtoken';




// const user = async (req, res, next) => {
//     try {
//         const { token } = req.headers;
//         const sql = "SELECT * FROM user WHERE token = ?";
//         const result = await query(sql, [token]);
//         if (result[0] && result[0].type === 0) {
//             res.locals.user = result[0];
//             next();
//         } else {
//             res.status(401).send("Unauthorized");
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("user Error");
//     }
// }
const key = "secretkey";


const user = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ user: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            let authUser = jwt.verify(token, key);
            req.authUserid = authUser.user_id;
        }

        next();


    } catch (err) {
        console.log(err);
        return res.status(500).json("user Error");
    }
}



export default user;