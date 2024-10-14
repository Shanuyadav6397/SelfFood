import AppError from "./app.Error.js";

class BadRequestError extends AppError {
    constructor(parms) {
        let message = '';
        parms.forEach(Parms => message += `${Parms}`);


        super(`Bad Request ${parms}`, 400);
    }
}

export { BadRequestError };