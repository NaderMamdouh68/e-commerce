import express from 'express';
// import auth from './Authentication/Authentication.js';
import auth from './Authentication/Authen.js';
import product from './Router/productCRUD.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/productImg"));

app.use('/authentication', auth);



app.use('/product', product);










app.listen(5000, () => {
    console.log("Server is running on port 5000");
});