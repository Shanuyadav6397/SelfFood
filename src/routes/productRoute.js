import express from "express";
import { addProduct, getProduct } from "../controllers/productController.js";
import { uploader } from "../middlewares/multerMiddleware.js";
const productRouter = express.Router();


productRouter.route("/product").post(uploader.single("productImage") ,addProduct);
productRouter.route("/products/category/:category").get(getProduct);

export { productRouter };