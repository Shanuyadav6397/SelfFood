import { JWT_ACCESS_TOKEN_SECRET, JWT_ACCESS_TOKEN_EXPIRE } from "../config/serverConfig.js";
import { findAUser } from "../repositories/userRepositories.js";
import { ApiError } from "../utils/ApiError.js";
import { NotFoundError } from "../utils/notFoundError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(loginDetails) {
  try {
    // step 1: validate login details
    const { email, password, mobileNumber } = loginDetails;
    if (!(email || mobileNumber)) {
    throw new ApiError(400, "Email or mobile number is required");
  }
  // step 2: check if user exists
  const user = await findAUser({ $or : [{ email }, { mobileNumber }] });
  if(!user){
    throw new NotFoundError("User");
  }
  // step 3: validate the password of the user
  const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new ApiError(400, "Incorrect password");
    }
    // step 4: generate a token for the user
    const authToken = jwt.sign(
        {email: user.email, id: user._id, mobileNumber: user.mobileNumber, firstName: user.firstName},
        JWT_ACCESS_TOKEN_SECRET,
        {expiresIn: JWT_ACCESS_TOKEN_EXPIRE}
    )
    return authToken;

  } catch (error) {
    console.log(error);
    throw new ApiError(error.statusCode, error.message, {}, error);
  }
}


export { login };