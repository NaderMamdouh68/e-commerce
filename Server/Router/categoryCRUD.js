import express from 'express';
import query from '../Database/DB_Con.js';
import user from '../middleware/checkuser.js';
import admin from '../middleware/checkadmin.js';
import { body, validationResult } from 'express-validator';
import upload from '../middleware/uploadimage.js';
import fs from 'fs';

const category = express();
category.use(express.Router());



category.post('/categorycreate',
    admin,
    upload,
    body("category_name").notEmpty().withMessage("category Name is required")
        .isString().withMessage("please enter a valid Category name"),
    body("description").notEmpty().withMessage("Description is required")
        .isString().withMessage("please enter a valid Description"),
    body("title").notEmpty().withMessage("Title is required"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const sqlcheck = "select * from category where category_name = ?";
            const value = [req.body.category_name];
            const checkcategory = await query(sqlcheck, value);
            if (checkcategory[0]) {
                return res.status(404).json({ ms: "category Is Already Exist !" });
            }

            const categoryData = {
                category_name: req.body.category_name,
                description: req.body.description,
                image: req.file.filename,
                title: req.body.title
            };


            const sqlInsert = "INSERT INTO category set ?";
            const values = [categoryData];
            await query(sqlInsert, values, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            res.status(200).json({ msg: "category Created Successfully" });

        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });








product.put('/productupdate/:id',
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
                image: req.file.filename,
                category_id: req.body.category_id
            };

            if (req.file) {
                productData.image = req.file.filename;
                fs.unlinkSync("./public/productImg/" + productdetails[0].image);
            }

            const sqlUpdate = "UPDATE product SET ?  WHERE product_id = ?";
            const values = [productData, req.params.id];
            await query(sqlUpdate, values, (err) => {
                if (err) {
                    console.log(err);
                }
                res.status(200).json({ msg: "Product Updated Successfully" });
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });

product.get('/',
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where product_name LIKE '%${req.query.search}%' OR description LIKE '%${req.query.search}%'`;
            }
            const productdetails = await query(`select * from product ${search}`);
            productdetails.map((productdetail) => {
                productdetail.image = "http://" + req.hostname + ":5000/" + productdetail.image;
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
            productdetails[0].image = "http://" + req.hostname + ":5000/" + productdetails[0].image;
            res.status(200).json(productdetails[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });

product.delete("productdelete/:id",
    admin,
    async (req, res) => {
        try {
            const productdetails = await query("SELECT * FROM product WHERE product_id = ?", [req.params.id]);
            if (!productdetails[0]) {
                res.status(404).json({ ms: "Product not found !" });
            }
            fs.unlinkSync("../public/productImg" + productdetails[0].image);
            const sqlDelete = "DELETE FROM product WHERE product_id = ?";
            const values = [productdetails[0].product_id];
            await query(sqlDelete, values, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            res.status(200).json({
                msg: "Product delete successfully",
            });
        } catch (err) {
            res.status(500).json(err);
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
                user_id: res.locals.user.user_id,
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
    user,
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
                res.status(404).json({ ms: "movie not found !" });
            }

            const orderData = {
                user_id: res.locals.user.user_id,
                product_id: req.body.product_id,
                order_date: new Date(),
            };

            await query("insert into orders set ?", orderData );
            res.status(200).json({
                msg: "Your Order Is added successfully !",
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
);


export default product;













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

