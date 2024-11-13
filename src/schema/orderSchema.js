import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items: [
        {
            productName: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    discountPrice:{
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    paybillAmount: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});


const Order = mongoose.model ("Order", orderSchema);

export default Order;