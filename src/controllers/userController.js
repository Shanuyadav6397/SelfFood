import { registerUser } from "../services/userService.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


async function createNewUser(req, res) {
    try {
        const user = await registerUser({
            firstName:req.body.firstName,
            midName:req.body.midName,
            lastName:req.body.lastName,
            mobileNumber:req.body.mobileNumber,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address
        });
        return res
        .status(200)
        .json(new ApiResponse(200, "User created successfully", user, {}));
    } catch (error) {
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
    }
}

export { createNewUser };