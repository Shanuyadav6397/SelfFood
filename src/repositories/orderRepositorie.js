import Order from "../schema/orderSchema.js";
import { ApiError } from "../utils/ApiError.js";

async function addOrder(orderDetails){
    try {
        const order = await Order.create(orderDetails);
        return order;
    } catch (error) {
        console.log(error);
        throw new ApiError(500, 'Internal server error', null, error.message);
    }
}


export { addOrder }
