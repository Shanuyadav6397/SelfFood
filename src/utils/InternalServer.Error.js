import AppError from "./app.Error.js";

class InternalServerError extends AppError {
    constructor() {
        super("It's our server error where something went wrong", 500);
    }
}


export { InternalServerError };