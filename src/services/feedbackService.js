import { creatNewFeedback } from "../repositories/feedbackRepositories.js";
import { ApiError } from "../utils/ApiError.js";

async function addFeedback(feedbackDetails){
    try {
        const { name, gmail, message } = feedbackDetails;
        if(!(name && gmail && message)){
            throw new ApiError(400, 'All fields are required');
        }
        const feedback = await creatNewFeedback(feedbackDetails);
        return feedback;
    } catch (error) {
        console.log(error);
        throw new ApiError(500, 'Internal server error', null, error.message);
    }
}

export { addFeedback }