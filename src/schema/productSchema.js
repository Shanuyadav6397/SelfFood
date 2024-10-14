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
    quantity:{
        type:Number,
        required:true,
        default:20
    },
    category: {
        type: String,
        enum: ['veg '],
        default: 'veg'
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

export { Product };