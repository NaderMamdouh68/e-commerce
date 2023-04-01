import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";
import multer from "multer";
import path from "path";


const Products = express();
Products.use(cors());
Products.use(bodyParser.urlencoded({ extended: false }))
Products.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: './images/uploadProductImg',
    filename (req, file, cb) {
       return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|webp|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}).single('image');





Products.get('/', (req, res) => {
    const sqlSelect = "SELECT product.product_id, product.product_name, product.price, product.description, product.image, category.category_name FROM product INNER JOIN category ON product.category_id = category.category_id";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.post('/create',upload ,(req, res) => {
    const sqlInsert = "INSERT INTO product ( product_name, price, description, image, category_id)VALUES (?,?,?,?,?)";
    const values = [req.body.product_name, req.body.price, req.body.description ,req.file.filename,req.body.category_id];
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.get('/read/:id', (req, res) => {
    const sqlRead = "SELECT * FROM product WHERE product_id  = ?";
    const values = [req.params.product_id];
    db.query(sqlRead, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

Products.put('/update/:id',upload ,(req, res) => {
    const sqlUpdate = "UPDATE product SET product_name = ?, price = ?, description = ? , image =?, category_id =?   WHERE product_id = ?";
    const values = [req.body.product_name, req.body.price, req.body.description, req.file.filename , req.body.category_id ,req.params.id];
    db.query(sqlUpdate, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



Products.delete('/delete/:id', (req, res) => {
    const sqlDelete = "DELETE FROM product WHERE product_id  = ?";
    const values = [req.params.product_id];
    db.query(sqlDelete, values, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});


export default Products;