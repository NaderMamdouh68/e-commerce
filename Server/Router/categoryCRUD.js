import {express , Router} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";



const Category = require('express').Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Category.use(cors());



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

Category.post('/categorycreate', (req, res) => {
    const sqlInsert = "INSERT INTO category (category_name, description,title) VALUES (?,?,?)";
    const values = [req.body.category_name, req.body.description, req.body.title];
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

