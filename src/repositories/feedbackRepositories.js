import Feedback from "../schema/feedbackSchema.js";

async function creatNewFeedback(feedbackDetails){
    try {
        const feedback = await Feedback.create(feedbackDetails);
        return feedback;
    } catch (error) {
        console.log(error);    
    }
}

export { creatNewFeedback }