import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";



const Category = express();
Category.use(cors());
Category.use(bodyParser.urlencoded({ extended: false }));
Category.use(bodyParser.json());


Category.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM category";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Category.post('/create', (req, res) => {
    const sqlInsert = "INSERT INTO category (category_name, title, description) VALUES (?,?,?)";
    const values = [req.body.category_name, req.body.title, req.body.description];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Category.get('/categorydetails/:id', (req, res) => {
    const sqlRead = "SELECT * FROM category WHERE category_id = ?";
    const values = [req.params.id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Category.put('/categoryupdate/:id', (req, res) => {
    const sqlUpdate = "UPDATE Category SET category_name = ?, title = ?, description = ? WHERE category_id = ?";
    const values = [req.body.category_name, req.body.title, req.body.description, req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Category.delete('/categorydelete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM Category WHERE category_id = ?";
    const values = [req.params.id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});



export default Category;

