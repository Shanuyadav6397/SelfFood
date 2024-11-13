import express from "express";
import { createOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/create").post(createOrder);

export { orderRouter };