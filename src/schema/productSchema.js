import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name must required'],
        minlenght: [5, 'Product name atleast 5 characters'],
        trim:true
    },
    description: {
        type: String,
        minlenght: [10, 'Product description atleast 10 characters'],
        trim:true
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'product price is required']
    },
    category: {
        type: String,
        enum: ["burger", "pizza", "beverage", "Chinese Special", "South indian", "Punjabi Special", "Desserts", "Sandwiches"]
    },
    inStock: {
        type: Boolean,
        required: [true, 'In stock status in required'],
        default: true
    }
}, {
    timestamps: true
});


const Product = mongoose.model("Product", productSchema);

export default Product;