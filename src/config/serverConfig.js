import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});


// Here we are exporting all the env variables that the project uses
    export const PORT = process.env.PORT || 3000;
    export const DB_URL = process.env.DB_URL;
    export const CLOUDINARY_CLOUD_NAME = process.env.cloudinary_cloud_name;
    export const CLOUDINARY_API_KEY = process.env.cloudinary_api_key;
    export const CLOUDINARY_API_SECRET = process.env.cloudinary_api_secret;