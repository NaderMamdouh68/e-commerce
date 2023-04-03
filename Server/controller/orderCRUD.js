import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";


const Order = express();
Order.use(cors());
Order.use(bodyParser.urlencoded({ extended: false }));
Order.use(bodyParser.json());

 Order.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM orders";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

Order.post('/ordercreate',(req, res) => {
    const sqlInsert = "INSERT INTO orders ( user_id, user_name, product_id, product_name ,quantity)VALUES (?,?,?,?,?)";
    const values = [req.body.user_id,req.body.user_name, req.body.product_id, req.body.product_name ,req.body.quantity];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Order.get('/showorder/:id', (req, res) => {
     const sqlRead = "SELECT order_id ,user_name, product_name, order_date ,quantity FROM orders where order_id = ?";
     const values = [req.params.id];
     db.query(sqlRead, values, (err, result) => {
         if (err) {
            console.log(err);
        } else {
           res.json(result);
         }
     });
 });

// Products.get('/productfilter/:id', (req, res) => {
//     const sqlRead = "select category.category_name, product.product_id, product.product_name, product.price, product.description, product.image from product inner join category on product.category_id = category.category_id where category.category_id = ?";
//     const values = [req.params.id];
//     db.query(sqlRead, values, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(result);
//         }
//     });
// });


Order.delete('/orderdelete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM orders WHERE order_id  = ?";
    const values = [req.params.id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



export default Order;