import { addOrder } from "../repositories/orderRepositorie.js";
import { ApiError } from "../utils/ApiError.js";

async function newOrder(orderDetails) {
    try {
        const { items, discountPrice, totalPrice, paybillAmount } = orderDetails;
        if(!(items || discountPrice || totalPrice || paybillAmount)){
            throw new ApiError(400, 'All fields are required');
        }
        const order = await addOrder(orderDetails);
        return order;
    } catch (error) {
        console.log(error);
        throw new ApiError(500, 'Internal server error', null, error.message);
    }
}

export { newOrder }