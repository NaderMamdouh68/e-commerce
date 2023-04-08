import express from 'express';
// import auth from './Authentication/Authentication.js';
import cors from 'cors';
import auth from './Authentication/Authen.js';
import product from './Router/productCRUD.js';
import category from './Router/categoryCRUD.js';
import userlist from './Router/userCRUD.js';



const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/productImg"));

app.use('/authentication', auth);



app.use('/product', product);
app.use('/category', category);
app.use('/user', userlist);










app.listen(5000, () => {
    console.log("Server is running on port 5000");
});