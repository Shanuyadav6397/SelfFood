import { JWT_ACCESS_TOKEN_SECRET, JWT_ACCESS_TOKEN_EXPIRE } from "../config/serverConfig.js";
import { findAUser, updateUser } from "../repositories/userRepositories.js";
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
        {email: user.email, _id: user._id, mobileNumber: user.mobileNumber, firstName: user.firstName},
        JWT_ACCESS_TOKEN_SECRET,
        {expiresIn: JWT_ACCESS_TOKEN_EXPIRE}
    )
    return authToken;

  } catch (error) {
    console.log(error);
    throw new ApiError(error.statusCode, error.message, {}, error);
  }
}

async function userPasswordChange(userDetails) {
  try {
    const { oldPassword, newPassword, confirmPassword, _id } = userDetails;
    if(newPassword !== confirmPassword){
      throw new ApiError(400, "confirm password and new password do not match");
   }

    if(newPassword === oldPassword){
      throw new ApiError(400, "New password cannot be the same as the old password");
    }
  
  const existUser = await findAUser({ _id });
    if(!existUser){
        throw new NotFoundError("User");
    }
    const passwordMatch = await bcrypt.compare(oldPassword, existUser.password);
    if (!passwordMatch) {
        throw new ApiError(400, "Incorrect password");
    }
    const oldPasswordMatch = await bcrypt.compare(newPassword, existUser.password);
    if (oldPasswordMatch) {
        throw new ApiError(400, "New password cannot be the same as the old password");
    }
    const passowrd = await bcrypt.hash(newPassword, 10);
    const updatedUser = await updateUser({ _id },{
      $set: {
        password: passowrd
      }
    });
    if(!updatedUser){
        throw new NotFoundError("User");
    }
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw new ApiError(error.statusCode, error.message, {}, error);
  }
}

async function userEmailChange(userDetails){
  try {
    const { email, _id, passowrd } = userDetails;
    const user = await findAUser({ email });
    if(user){
        throw new ApiError(400, "Email already exists");
    }
    const existUser = await findAUser({ _id });
    
    if(!existUser){
        throw new NotFoundError("User");
    }
    const passwordMatch = await bcrypt.compare(passowrd, existUser.password);
    if (!passwordMatch) {
        throw new ApiError(400, "Incorrect password");
    }
    const updatedUser = await updateUser({ _id },{
      $set: {
        email
      }
    });
    if(!updatedUser){
        throw new NotFoundError("User");
    }
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw new ApiError(error.statusCode, error.message, {}, error);
    
  }
}

export { login, userPasswordChange, userEmailChange };