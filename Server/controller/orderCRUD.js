import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";


const Order = express();
Category.use(cors());
Category.use(bodyParser.urlencoded({ extended: false }));
Category.use(bodyParser.json());




export default Order;