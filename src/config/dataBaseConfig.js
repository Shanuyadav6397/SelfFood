import mongoose from 'mongoose';
import { DB_URL } from './serverConfig.js';


/**
 * The below function helps us to connect to a mongodb server
 */
async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Successfully connected to the mongo db server .....");
    } catch (error) {
        console.log("Not able to connect to the mongodb server");
        console.log(error);
    }
}
export default connectDB;