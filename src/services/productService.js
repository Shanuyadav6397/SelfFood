import { uploadOnCloudinary } from "../config/cloudinaryConfig.js";
import { creatProduct, fetchProductByCategory } from "../repositories/productRepositorie.js";
import { ApiError } from "../utils/ApiError.js";

async function newProduct(productDetails){
    try {
        const { productName, description, productImage, price, category } = productDetails;
        if(!productName || !description || !productImage || !price || !category){
            throw new ApiError(400, 'All fields are required');
        }
    
        const productImageLocalPath = productImage;
        if(!productImageLocalPath){
            throw new ApiError(400, 'Product image is required');
        }
    
        const productImageLink = await uploadOnCloudinary(productImageLocalPath);
        if(!productImageLink){
            throw new ApiError(500, 'Internal server error');
        }
    
        const product = await creatProduct({
            productName,
            description,
            price,
            category,
            productImage: productImageLink.url
        });
        return product;
    
    } catch (error) {
        console.log(error);
        throw new ApiError(500, 'Internal server error', null, error.message);
    }
}

async function fetchProduct(category){
    try {
        const products = await fetchProductByCategory(category);
        return products;
    } catch (error) {
        console.log(error);
        throw new ApiError(500, 'Internal server error', null, error.message);
    }
}


export { newProduct, fetchProduct }