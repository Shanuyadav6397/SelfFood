import AppError from "./app.Error.js";


class NotFoundError extends AppError {
    constructor(data) {
        super(`The requested ${data} is not found`, 404);
    }
}


export { NotFoundError };