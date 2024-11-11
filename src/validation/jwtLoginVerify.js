import { findAUser } from "../repositories/userRepositories.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { NotFoundError } from "../utils/notFoundError.js";
import { JWT_ACCESS_TOKEN_SECRET } from "../config/serverConfig.js";

async function jwtLoginVerify(req, res, next) {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json(new ApiError(401, "Unauthorized access, please login"));
        }
        const verified = jwt.verify(token, JWT_ACCESS_TOKEN_SECRET);
        if (!verified) {
            return res.status(401).json(new ApiError(401, "Unauthorized, invalid token"));
        }
        const user = await findAUser({ _id: verified._id });
        if (!user) {
            return res.status(404).json(new NotFoundError("User"));
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json(new ApiError(error.statusCode, error.message, {}, error));
        
    }
}


export { jwtLoginVerify };