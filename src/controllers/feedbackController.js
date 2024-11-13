import { addFeedback } from "../services/feedbackService.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

async function createFeedback(req, res){
    try {
        const feedback = await addFeedback({
            name: req.body.name,
            gmail: req.body.gmail,
            message: req.body.message
        });
        return res
        .status(201).json(new ApiResponse(201, 'Feedback added successfully', feedback, null));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(500, 'Internal server error', null, error.message));
    }
}

export { createFeedback }