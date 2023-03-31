import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";



const Category = express();
Category.use(cors());
Category.use(bodyParser.json());


Category.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM categories";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Category.post('/create', (req, res) => {
    const sqlInsert = "INSERT INTO categories (cat_name, titel, description) VALUES (?,?,?)";
    const values = [req.body.cat_name, req.body.titel, req.body.description];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Category.get('/read/:id', (req, res) => {
    const sqlRead = "SELECT * FROM categories WHERE id = ?";
    const values = [req.params.id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Category.put('/update/:id', (req, res) => {
    const sqlUpdate = "UPDATE Category SET cat_name = ?, titel = ?, description = ? WHERE id = ?";
    const values = [req.body.cat_name, req.body.titel, req.body.description, req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Category.delete('/delete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM Category WHERE id = ?";
    const values = [req.params.id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



export default Category;

