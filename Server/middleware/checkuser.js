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


const user =(req, res, next) => {
    try {
        let token  = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let authUser = jwt.verify(token, key);
            res.locals.user = authUser;
            req.authUserid = authUser.user_id;
        }else{
            res.status(401).send("Unauthorized");
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send("user Error");
    }
}



export default user;