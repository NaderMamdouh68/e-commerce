import express from 'express';
import query from '../Database/DB_Con.js';
import user from '../middleware/checkuser.js';
import admin from '../middleware/checkadmin.js';
import { body, validationResult } from 'express-validator';
import upload from '../middleware/uploadimage.js';
import fs from 'fs';


const product = express();
product.use(express.Router());


product.post('/productcreate',
    admin,
    upload,
    body("product_name").notEmpty().withMessage("Product Name is required")
        .isString().withMessage("please enter a valid Product name"),
    body("price").notEmpty().withMessage("Price is required"),
    body("description").notEmpty().withMessage("Description is required")
        .isString().withMessage("please enter a valid Description"),
    body("category_id").notEmpty().withMessage("Category is required"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            if (!req.file) {
                return res.status(400).json({ msg: "Error: No Image Selected!" });
            }

            const sqlcheck = "select * from product where product_name = ?";
            const value = [req.body.product_name];

            const checkproduct = await query(sqlcheck, value);
            if (checkproduct[0]) {
                return res.status(404).json({ ms: "Product Is Already Exist !" });
            }

            const productData = {
                product_name: req.body.product_name,
                price: req.body.price,
                description: req.body.description,
                image: req.file.filename,
                category_id: req.body.category_id
            };


            const sqlInsert = "INSERT INTO product set ?";
            const values = [productData];
            await query(sqlInsert, values);
            res.status(200).json({ msg: "Product Created Successfully" });

        } catch (err) {
            return res.status(500).json({ msg: "Server Error" });
        }

    });

product.put('/productupdate/:id',
    admin,
    body("product_name").isString().withMessage("please enter a valid Product name"),
    body("price").notEmpty().withMessage("Price is required"),
    body("description").notEmpty().withMessage("Description is required")
        .isString().withMessage("please enter a valid Description"),
    body("category_id").notEmpty().withMessage("Category is required"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // if (!req.file) {
            //     return res.status(400).json({ msg: "Error: No Image Selected!" });
            // }

            const sqlcheck = "SELECT * FROM product WHERE product_id = ?";
            const value = [req.params.id];

            const productdetails = await query(sqlcheck, value);

            if (!productdetails[0]) {
                return res.status(400).json({ msg: "Error: Product Not Found!" });
            }

            const productData = {
                product_name: req.body.product_name,
                price: req.body.price,
                description: req.body.description,
                category_id: req.body.category_id
            };

            // if (req.file) {
            //     productData.image = req.file.filename;
            //     fs.unlinkSync("./public/productImg/" + productdetails[0].image);
            // }

            const sqlUpdate = "UPDATE product SET ?  WHERE product_id = ?";
            const values = [productData, req.params.id];
            await query(sqlUpdate, values);

            res.status(200).json({ msg: "Product Updated Successfully" });

        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
    });

product.get('/',
    async (req, res) => {
        try {
            let search = "";
            let filter = "";
            if (req.query.search) {
                search = `where product.product_name LIKE '%${req.query.search}%' OR product.description LIKE '%${req.query.search}%'`;
            }
            if (req.query.filter) {
                filter = `where product.category_id = ${req.query.filter}`;
            }
            const productdetails = await query(`select product.product_id, product.product_name, product.price, product.description, product.image,product.category_id, category.category_name from product inner join category on product.category_id = category.category_id ${search} ${filter}`);
            productdetails.map((productdetail) => {
                // productdetail.image = "http://" + req.hostname + ":5000/" + productdetail.image;
            });
            res.status(200).json(productdetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });

product.get('/productshow/:id',
    async (req, res) => {
        try {
            const sqlShow = "select product.product_id, product.product_name, product.price, product.description, product.image, category.category_name from product inner join category on product.category_id = category.category_id where product_id = ?";
            const values = [req.params.id];

            const productdetails = await query(sqlShow, values);
            if (!productdetails[0]) {
                return res.status(404).json({ ms: "Product not found !" });
            }
            // productdetails[0].image = "http://" + req.hostname + ":5000/" + productdetails[0].image;
            res.status(200).json(productdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });

product.delete("/productdelete/:id",
    admin,
    async (req, res) => {
        try {
            const productdetails = await query("SELECT * FROM product WHERE product_id = ?", [req.params.id]);
            if (!productdetails[0]) {
                return res.status(404).json({ ms: "Product not found !" });
            }
            fs.unlinkSync("./public/productImg/" + productdetails[0].image);
            const sqlDelete = "DELETE FROM product WHERE product_id = ?";
            const values = [productdetails[0].product_id];
            await query(sqlDelete, values);
            res.status(200).json({
                msg: "Product delete successfully",
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);

product.post('/productfeedback',
    body("product_id").isNumeric().withMessage("Product Id is required"),
    body("comment").notEmpty().withMessage("Comment is required"),
    user,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const sqlSelect = "select * from product where product_id = ?";
            const values = [req.body.product_id];
            const products = await query(sqlSelect, values);
            if (!products[0]) {
                res.status(404).json({ ms: "Product not found !" });
            }

            const feedbackData = {
                user_id: req.authUserid,
                product_id: products[0].product_id,
                comment: req.body.comment,
            };

            await query("insert into feedback set ?", feedbackData);

            res.status(200).json({
                msg: "Your Feedback added successfully !",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);


product.post('/productorder',
    body("product_id").isNumeric().withMessage("Product Id is not valid"),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const sqlSelect = "select * from product where product_id = ?";
            const values = [req.body.product_id];
            const feedback = await query(sqlSelect, values);
            if (!feedback[0]) {
                res.status(404).json({ ms: "Product not found !" });
            }

            const orderData = {
                user_id: req.authUserid,
                product_id: req.body.product_id,
                order_date: new Date(),
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

product.get('/productallorder',
    admin,
    async (req, res) => {
        try {
            const sqlSelect = "select orders.order_id, orders.order_date, product.product_name, user.user_name from orders inner join product on orders.product_id = product.product_id inner join user on orders.user_id = user.user_id";
            const orderdetails = await query(sqlSelect);
            res.status(200).json(orderdetails);
        } catch (err) {
           return res.status(500).json(err);
        }
    }
);


export default product;