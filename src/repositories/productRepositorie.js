import  Product  from "../schema/productSchema.js";


async function creatProduct(productDetails){
    try {
        const product = await Product.create(productDetails);
        return product;
    } catch (error) {
        console.log(error);    
    }
}

async function fetchProductByCategory(category){
    try {
        const products = await Product.find({category});
        return products;
    } catch (error) {
        console.log(error);
    }
}

export { creatProduct, fetchProductByCategory }