class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor); //This property is used to check if the error is operational or not
    }
}

export { AppError }; 