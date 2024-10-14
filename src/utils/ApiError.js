class ApiError {
    constructor(statusCode, success = "success", data, error) {
        this.success = success || false;
        this.statusCode = statusCode;
        this.message = this.message;
        this.data = null;
        this.error = error;
    }
}

export { ApiError };