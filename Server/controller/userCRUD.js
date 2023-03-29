import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";



const Users = express();
Users.use(cors());
Users.use(bodyParser.json());


Users.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.post('/signup', (req, res) => {
    const sqlInsert = "INSERT INTO users (name, password, email) VALUES (?,?,?)";
    const values = [req.body.username, req.body.password, req.body.email];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.get('/read/:id', (req, res) => {
    const sqlRead = "SELECT * FROM users WHERE id = ?";
    const values = [req.params.id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.put('/update/:id', (req, res) => {
    const sqlUpdate = "UPDATE users SET name = ?, password = ?, email = ? WHERE id = ?";
    const values = [req.body.username, req.body.password, req.body.email, req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Users.delete('/delete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM users WHERE id = ?";
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

