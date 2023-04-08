import express from 'express';
import product from './Router/productCRUD.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/productImg"));
app.use('/product', product);









app.listen(5000, () => {
    console.log("Server is running on port 5000");
});