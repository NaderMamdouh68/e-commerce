import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";


const Products = express();

Products.use(cors());
Products.use(bodyParser.urlencoded({ extended: false }))
Products.use(bodyParser.json());

Products.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.post('/create', (req, res) => {
    const sqlInsert = "INSERT INTO products (pro_name, des, price) VALUES (?,?,?)";
    const values = [req.body.pro_name, req.body.des, req.body.price];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.get('/read/:id', (req, res) => {
    const sqlRead = "SELECT * FROM products WHERE id = ?";
    const values = [req.params.id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.put('/update/:id', (req, res) => {
    const sqlUpdate = "UPDATE products SET pro_name = ?, des = ?, price = ? WHERE id = ?";
    const values = [req.body.pro_name, req.body.des, req.body.price, req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



Products.delete('/delete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM products WHERE id = ?";
    const values = [req.params.id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});


export default Products;