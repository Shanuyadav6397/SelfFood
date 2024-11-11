import { login } from "../services/userAuthService.js";
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


export {userLogin};