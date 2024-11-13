import { fetchProduct, newProduct } from "../services/productService.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

async function addProduct(req, res){
    try {
        const product = {
            productName: req.body.productName,
            description: req.body.description,
            productImage: req.file.path,
            price: req.body.price,
            category: req.body.category,
        }
        const productDetails = await newProduct(product);
        return res
        .status(201)
        .json(new ApiResponse(201, 'Product added successfully', productDetails, null));

    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(500, 'Internal server error', null, error.message));
    }
}

async function getProduct(req, res){
    try {
        const {category} = req.params;
        const products = await fetchProduct(category);
        if (!products || products.length === 0) {
            return res.status(404).json(new ApiError("No products found for this category"));
        }
        return res
        .status(200)
        .json(new ApiResponse(200, 'Product fetched successfully', products, null));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(500, 'Internal server error', null, error.message));
    }
}

export { addProduct, getProduct }