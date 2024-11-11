import dotenv from 'dotenv';
// this is for if env path can not configured in

dotenv.config({
     path: './.env'
     }); 


dotenv.config();


// Here we are exporting all the env variables that the project uses
    export const PORT = process.env.PORT;
    export const DB_URL = process.env.DB_URL;
    export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
    export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
    export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
    export const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;
    export const JWT_ACCESS_TOKEN_EXPIRE = process.env.JWT_ACCESS_TOKEN_EXPIRE;