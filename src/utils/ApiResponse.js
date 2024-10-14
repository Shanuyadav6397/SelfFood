class ApiResponse {
    constructor(statusCode, success = "success", data, error) {
        this.statusCode = statusCode;
        this.success = success || true;
        this.message = this.message;
        this.data = data;
        this.error = error;
    }
}

export { ApiResponse };