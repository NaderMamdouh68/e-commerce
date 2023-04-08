import express from 'express';
import query from '../Database/DB_Con.js';
import user from '../middleware/checkuser.js';
import admin from '../middleware/checkadmin.js';
import { body, validationResult } from 'express-validator';
import upload from '../middleware/uploadimage.js';
import cors from 'cors';

const category = express();
category.use(express.Router());
category.use(cors());




category.post('/categorycreate',
    admin,
    body("category_name").notEmpty().withMessage("please enter a valid Category name"),
    body("description").notEmpty().withMessage("please enter a valid Description"),
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
                title: req.body.title
            };


            const sqlInsert = "INSERT INTO category set ?";
            const values = [categoryData];
            await query(sqlInsert, values);
            res.status(200).json({ msg: "category Created Successfully" });

        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }

    });


category.get('/',
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where category_name LIKE '%${req.query.search}%' OR description LIKE '%${req.query.search}%'`;
            }
            const categorydetails = await query(`select * from category ${search}`);

            res.status(200).json(categorydetails);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });


category.put('/categoryupdate/:id',
    admin,
    body("category_name").notEmpty().withMessage("category Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("title").notEmpty().withMessage("title is required"),


    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }


            const sqlcheck = "SELECT * FROM category WHERE category_id = ?";
            const value = [req.params.id];

            const categorydetails = await query(sqlcheck, value);

            if (!categorydetails[0]) {
                return res.status(400).json({ msg: "Error: category Not Found!" });
            }

            const categoryData = {
                category_name: req.body.category_name,
                title: req.body.title,
                description: req.body.description,
            };



            const sqlUpdate = "UPDATE category SET ?  WHERE category_id = ?";
            const values = [categoryData, req.params.id];
            await query(sqlUpdate, values);

            res.status(200).json({ msg: "category Updated Successfully" });

        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Server Error" });
        }
    });



category.delete('/categorydelete/:id',
    admin,
    async (req, res) => {
        try {
            const categorydetails = await query("SELECT * FROM category WHERE category_id = ?", [req.params.id]);
            if (!categorydetails[0]) {
               return res.status(404).json({ ms: "category not found !" });
            }

            const sqlDelete = "DELETE FROM category WHERE category_id = ?";
            const values = [categorydetails[0].category_id];
            await query(sqlDelete, values);
            res.status(200).json({
                msg: "category delete successfully",
            });
        } catch (err) {
           return res.status(500).json(err);
        }
    }
);






export default category;















