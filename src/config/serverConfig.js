import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});


// Here we are exporting all the env variables that the project uses
    export const PORT = process.env.PORT || 3000;
    export const DB_URL = process.env.DB_URL