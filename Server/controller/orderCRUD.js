import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";


const Order = express();
Order.use(cors());
Order.use(bodyParser.urlencoded({ extended: false }));
Order.use(bodyParser.json());

 Order.get('/', (req, res) => {
    const sqlSelect = "SELECT order_id, user_id, product_id, order_date , product.product_name, user.user_name FROM order INNER JOIN USING (user_id) INNER JOIN product USING (product_id)";
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
    const sqlInsert = "INSERT INTO order ( user_id, product_id , order_date)VALUES (?,?,?)";
    const values = [req.body.user_id, req.body.product_id, req.body.order_date ];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Order.get('/readorder/:id', (req, res) => {
//     const sqlRead = "select order.order_id, order.user_id , order.product_id, order.order_date from order inner join //category on product.category_id = category.category_id where order_id  = ?";
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

Order.put('/orderUpdate/:id',(req, res) => {
    const sqlUpdate = "UPDATE order SET user_id = ?, product_id = ?, order_date = ?  WHERE order_id  = ?";
    const values = [req.body.user_id , req.body.product_id, req.body.order_date ,req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



Order.delete('/orderdelete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM order WHERE order_id  = ?";
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