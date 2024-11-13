import express from "express";
import { createFeedback } from "../controllers/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.route("/feedback").post(createFeedback);

export { feedbackRouter };