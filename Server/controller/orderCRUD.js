import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./DB_Con.js";


const Order = express();
Order.use(cors());
Order.use(bodyParser.urlencoded({ extended: false }));
Order.use(bodyParser.json());




export default Order;