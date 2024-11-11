import express from "express";
import { createNewUser } from "../controllers/userController.js";
const userRouter = express.Router();


userRouter.route("/register").post(createNewUser);

export { userRouter };