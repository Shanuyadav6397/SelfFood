import { newOrder } from "../services/orderService.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

async function createOrder(req, res){
    try {
        const orderDetails = {
            items: req.body.items,
            discountPrice: req.body.discountPrice,
            totalPrice: req.body.totalPrice,
            paybillAmount: req.body.paybillAmount
        }
        console.log(orderDetails);
        const order = await newOrder(orderDetails);
        return res
        .status(201)
        .json(new ApiResponse(201, 'Order added successfully', order, null));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(500, 'Internal server error', null, error.message));
        
    }
}

export { createOrder };