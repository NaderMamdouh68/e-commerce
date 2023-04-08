import express from 'express';
import query from "../Database/DB_Con.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";
import cors from "cors";


const auth = express();
auth.use(express.Router());
auth.use(cors)

const key = "secretkey";


auth.post('/signup',
    body("email").isEmail().withMessage("please enter a valid email!"),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    body("user_name").isLength({ min: 3 }).withMessage("username must be at least 3 chars long!"),
    body("phonenumber").isLength({ min: 3 }).withMessage("phonenumber must be at least 11 number!"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const sqlcheck = "SELECT * FROM user WHERE email = ?";
            const checkEmailExists = await query(sqlcheck, [req.body.email]);
            if (checkEmailExists.length > 0) {
                return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
            }



            if (req.body.password !== req.body.checkpassword) {
                return res.status(400).json({ errors: [{ msg: "Password does not match" }] });
            }


            const userData = {
                user_name: req.body.user_name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                phonenumber: req.body.phonenumber,
            };




            const sqlInsert = "INSERT INTO user set ?";
            const values = userData;
            await query(sqlInsert, values, (err, result) => {
                delete userData.password;
                const token = jwt.sign(userData,key);

                return res.status(200).json({Signup : true , token , userData});
                res.status(200).json(userData);
            });

        } catch (err) {
            console.log(err);
            res.status(500).send("Server Error");
        }
    });


auth.post('/login',
    body("user_name").isLength({ min: 3 }).withMessage("username must be at least 3 chars long!"),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const user = await query("select * from user where user_name = ?", [req.body.user_name]);
            if (user.length === 0) {
                return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
            }

            const checkpassword = await bcrypt.compare(req.body.password, user[0].password);

            if (!checkpassword) {
                return res.status(400).json({ errors: [{ msg: "Password is incorrect" }] });
            } else {
                delete user[0].password;
                const token = jwt.sign({user_id : user[0].user_id},key);
                return res.status(200).json({Login : true , token , user});
            }

        } catch (err) {
            console.log(err);
            res.status(500).send("Server Error");
        }
    });

export default auth;