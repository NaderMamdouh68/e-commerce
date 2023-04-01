import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import Users from './controller/userCRUD.js';
import Products from './controller/productCRUD.js';
import Category from './controller/categoryCRUD.js';
import db from './controller/DB_Con.js';

const app = express();
app.use(cors());
app.use(json());



app.use('/users', Users);
app.use('/products', Products);
app.use('/categories', Category);

app.post('/login', (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE user_name = ? AND password = ?", [user_name, password], 
    (err, result) => {
        
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination"});
            }
        
    });
});




app.listen(5000, () => {
    console.log("Server is running on port 5000");
});