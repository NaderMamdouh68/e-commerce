import express from 'express';
import query from '../Database/DB_Con.js';
import user from '../middleware/checkuser.js';
import admin from '../middleware/checkadmin.js';
import { body, validationResult } from 'express-validator';


const order = express();
order.use(express.Router());




order.post('/creatorder',
    user,
    body("product_id").notEmpty().withMessage("product Id is required"),
    body("quantity").notEmpty().withMessage("quantity is required"),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const sqlSelect = "select * from product where product_id = ?";
            const values = [req.body.product_id];
            const product = await query(sqlSelect, values);
            if (!product[0]) {
                res.status(404).json({ ms: "order not found !" });
            }

            const orderData = {
                user_id: req.authUserid,
                product_id: req.body.product_id,
                order_date: new Date(),
                waiting: 0,
                quantity: req.body.quantity,
            };

            await query("insert into orders set ?", orderData);
            res.status(200).json({
                msg: "Your Order Is added successfully !",
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
);

order.get('/orderall', admin,
    async (req, res) => {
        try {
            const sqlSelect = "select orders.order_id, orders.order_date,orders.quantity, orders.waiting , product.product_name,product.image , user.user_name from orders inner join product on orders.product_id = product.product_id inner join user on orders.user_id = user.user_id";
            const orderdetails = await query(sqlSelect);
            res.status(200).json(orderdetails);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);
order.get('/showUserOrder', user,
    async (req, res) => {
        try {
            const sqlSelect = "select orders.order_id, orders.order_date, orders.waiting ,orders.quantity, product.product_name ,product.image ,product.price, user.user_name from orders inner join product on orders.product_id = product.product_id inner join user on orders.user_id = user.user_id where orders.user_id = ?"
            const values = [req.authUserid];
            const orderdetails = await query(sqlSelect, values);
            res.status(200).json(orderdetails);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);

order.put('/acceptorder/:id', admin,
    async (req, res) => {
        try {
            const sqlSelect = "select * from orders where order_id = ?";
            const values = [req.params.id];
            const order = await query(sqlSelect, values);
            if (!order[0]) {
                res.status(404).json({ ms: "order not found !" });
            }
            const sqlUpdate = "update orders set waiting = 1 where order_id = ?";
            await query(sqlUpdate, values);
            res.status(200).json({
                msg: "Your Order Is accepted successfully !",
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
);

order.put('/rejectorder/:id',admin,
    async (req, res) => {
        try {
            const sqlSelect = "select * from orders where order_id = ?";
            const values = [req.params.id];
            const order = await query(sqlSelect, values);
            if (!order[0]) {
                res.status(404).json({ ms: "order not found !" });
            }
            const sqlUpdate = "update orders set waiting = 2 where order_id = ?";
            await query(sqlUpdate, values);
            res.status(200).json({
                msg: "Order Is rejected successfully !",
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
);

order.delete('/deleteorder/:id',user,
    async (req, res) => {
        try {
            const sqlSelect = "select * from orders where order_id = ?";
            const values = [req.params.id];
            const order = await query(sqlSelect, values);
            if (!order[0]) {
                res.status(404).json({ ms: "order not found !" });
            }
            const sqlDelete = "delete from orders where order_id = ?";
            await query(sqlDelete, values);
            res.status(200).json({
                msg: "Your Order Is deleted successfully !",
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
);




export default order;