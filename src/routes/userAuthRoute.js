import express from 'express';
import { userLogin } from '../controllers/userAuthController.js';


const authRouter = express.Router();

authRouter.route('/login').post(userLogin);


export { authRouter };