import express from 'express';
import query from '../Database/DB_Con.js';
import user from '../middleware/checkuser.js';
import admin from '../middleware/checkadmin.js';
import { body, validationResult } from 'express-validator';
import upload from '../middleware/uploadimageuser.js';
import fs from 'fs';
import cors from 'cors';
import bcrypt from 'bcrypt';


const userlist = express();
userlist.use(express.Router());
userlist.use(cors());




userlist.put('/userupdate',user,
    body("user_name").notEmpty().withMessage("please enter a valid user name"),
    body("email").isEmail().withMessage("please enter a valid email"),
    body("phonenumber").notEmpty().withMessage("please enter a valid phonenumber"),
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }




            const sqlcheck = "SELECT * FROM user WHERE user_id = ?";
            const value = [req.authUserid];

            const userdetails = await query(sqlcheck, value);

            if (!userdetails[0]) {
                return res.status(400).json({ msg: "Error: user Not Found!" });
            }


            if (req.body.email != userdetails[0].email) {
                return res.status(400).json({ errors: [{ msg: "Email Is Not Allow to Chage !" }] });
            }


            if (req.body.password) {
                const pass = await bcrypt.hash(req.body.password, 10);
                const sqlUpdate = "UPDATE user SET user_name = ?, email = ?, phonenumber = ?, password = ? WHERE user_id = ?";
                const values = [req.body.user_name, req.body.email, req.body.phonenumber, pass, req.authUserid];
                return await query(sqlUpdate, values, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).json({ msg: "user Updated Successfully" });
                });
            } else {
                const sqlUpdate = "UPDATE user SET user_name = ?, email = ?, phonenumber = ? WHERE user_id = ?";
                const values = [req.body.user_name, req.body.email, req.body.phonenumber, req.authUserid];
                return await query(sqlUpdate, values, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).json({ msg: "user Updated Successfully" });
                });
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });
userlist.put('/userupdate/:id',admin,
    body("user_name").notEmpty().withMessage("please enter a valid user name"),
    body("email").isEmail().withMessage("please enter a valid email"),
    body("phonenumber").notEmpty().withMessage("please enter a valid phonenumber"),
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }




            const sqlcheck = "SELECT * FROM user WHERE user_id = ?";
            const value = [req.params.id];

            const userdetails = await query(sqlcheck, value);

            if (!userdetails[0]) {
                return res.status(400).json({ msg: "Error: user Not Found!" });
            }


            if (req.body.email != userdetails[0].email) {
                return res.status(400).json({ errors: [{ msg: "Email Is Not Allow to Chage !" }] });
            }


            if (req.body.password) {
                const pass = await bcrypt.hash(req.body.password, 10);
                const sqlUpdate = "UPDATE user SET user_name = ?, email = ?, phonenumber = ?, password = ? WHERE user_id = ?";
                const values = [req.body.user_name, req.body.email, req.body.phonenumber, pass, req.params.id];
                return await query(sqlUpdate, values, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).json({ msg: "user Updated Successfully" });
                });
            } else {
                const sqlUpdate = "UPDATE user SET user_name = ?, email = ?, phonenumber = ? WHERE user_id = ?";
                const values = [req.body.user_name, req.body.email, req.body.phonenumber, req.params.id];
                return await query(sqlUpdate, values, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).json({ msg: "user Updated Successfully" });
                });
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });

userlist.get('/',
    admin,
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where user_name LIKE '%${req.query.search}%'`;
            }
            const userdetails = await query(`select * from user ${search}`);
            delete userdetails[0].password;

            res.status(200).json(userdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });

userlist.get('/usershow/:id',
    async (req, res) => {
        try {
            const sqlShow = "SELECT * FROM user WHERE user_id = ?";
            const values = [req.params.id];

            const userdetails = await query(sqlShow, values);
            if (!userdetails[0]) {
                return res.status(404).json({ ms: "user not found !" });
            }
            delete userdetails[0].password;
            res.status(200).json(userdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });
userlist.get('/userProfile',
    user,
    async (req, res) => {
        try {
            const sqlShow = "SELECT * FROM user WHERE user_id = ?";
            const values = [req.authUserid];

            const userdetails = await query(sqlShow, values);
            if (!userdetails[0]) {
                return res.status(404).json({ ms: "user not found !" });
            }
            delete userdetails[0].password;
            delete userdetails[0].status;
            delete userdetails[0].type;
            delete userdetails[0].user_id;
            res.status(200).json(userdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });

userlist.delete("/userdelete/:id",
    admin,
    async (req, res) => {
        try {
            const userdetails = await query("SELECT * FROM user WHERE user_id = ?", [req.params.id]);
            if (!userdetails[0]) {
                res.status(404).json({ ms: "user not found !" });
            }

            const sqlDelete = "DELETE FROM user WHERE user_id = ?";
            const values = [userdetails[0].user_id];
            await query(sqlDelete, values);
            res.status(200).json({
                msg: "user delete successfully",
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);






export default userlist;