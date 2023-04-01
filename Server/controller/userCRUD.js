import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";



const Users = express();
Users.use(cors());
Users.use(bodyParser.urlencoded({ extended: false }));

Users.use(bodyParser.json());


Users.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM user";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.post('/signup', (req, res) => {
    const sqlInsert = "INSERT INTO user (user_name, email, password, phonenumber)VALUES (?,?,?,?)";
    const values = [req.body.name, req.body.email, req.body.password ,req.body.phonenumber];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



Users.get('/userdetails/:id', (req, res) => {
    const sqlRead = "SELECT * FROM user WHERE user_id  = ?";
    const values = [req.params.id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.put('/userupdate/:id', (req, res) => {
    const sqlUpdate = "UPDATE user SET user_name = ?, email = ?, password = ?,phonenumber = ? WHERE user_id = ?";
    const values = [req.body.user_name, req.body.password, req.body.email,req.body.phonenumber , req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.delete('/userdelete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM user WHERE user_id = ?";
    const values = [req.params.id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



export default Users;

