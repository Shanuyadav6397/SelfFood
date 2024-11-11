import { updateUser } from "../repositories/userRepositories.js";
import { login, userEmailChange, userPasswordChange } from "../services/userAuthService.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

async function userLogin(req,res){
    try {
        const loginDetails = req.body;
        const loginUser = await login(loginDetails);
        res.cookie("authToken", loginUser, {
            httpOnly: true,
            secure: false
        });
        return res
        .status(200)
        .json(new ApiResponse(200, "User logged in successfully", loginUser, {}));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
        
    }
}

async function userLogout(req,res){
    try {
        await updateUser(req.user._id, { token: "" });
        res.clearCookie("authToken");
        return res
        .status(200)
        .json(new ApiResponse(200, "User logged out successfully", {}, {}));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
    }
}

async function passwordChange(req, res){
    try {
        const user = {
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword,
            confirmPassword: req.body.confirmPassword,
            _id: req.user._id
        }
        
        const updatedUser = await userPasswordChange(user);
        return res
        .status(200)
        .json(new ApiResponse(200, "Password changed successfully", updatedUser, {}));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
    }
}

async function emailChange(req, res){
    try {
        const user = {
            email: req.body.email,
            passowrd: req.body.passowrd,
            _id: req.user._id
        }
        const updateUser = await userEmailChange(user);
        return res
        .status(200)
        .json(new ApiResponse(200, "Email changed successfully", updateUser, {}));
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
    }
}


export { userLogin, userLogout, passwordChange, emailChange };