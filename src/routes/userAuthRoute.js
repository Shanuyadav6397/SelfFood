import express from 'express';
import {
    emailChange,
    passwordChange,
    userLogin,
    userLogout
} from '../controllers/userAuthController.js';
import { jwtLoginVerify } from '../validation/jwtLoginVerify.js';


const authRouter = express.Router();

authRouter.route('/login').post(userLogin);
authRouter.route('/logout').post(jwtLoginVerify, userLogout);
authRouter.route('/passwordChange').patch(jwtLoginVerify, passwordChange);
authRouter.route('/emailChange').patch(jwtLoginVerify, emailChange);


export { authRouter };