import { createAUser, findAUser } from "../repositories/userRepositories.js";
import { ApiError } from "../utils/ApiError.js";
import { InternalServerError } from "../utils/InternalServerError.js";


    async function registerUser(userDetails) {
       try {
         // here we will check the user details is valid or not
         if ([userDetails.email, userDetails.password, userDetails.firstName, userDetails.lastName, userDetails.mobileNumber].includes(undefined)) {
             throw  new ApiError(400, "All fields are required");
         }
         // here we will find the user by email already exist or not with the help of repository layer
         const existUser = await findAUser({
             $or: [{ email: userDetails.email }, { mobileNumber: userDetails.mobileNumber }]
         });
 
         //if the user already exist then throw this error
         if (existUser) {
             throw new ApiError(400, "User already exist with this email or mobile number");
         }
 
         // Here we will create a new user with the help of (createUser) function which lies in repository layer
         const newUser = await createAUser({
             ...userDetails
         });
 
         // if user can't create then thwo the error
         if (!newUser) {
             throw new InternalServerError();
         }
 
         return newUser;
     }catch (error) {
        console.log(error);
        throw new InternalServerError();
       }
    }

export {registerUser};