class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode

        //optional
        Error.captureStackTrace(this,this.constructor);

    }
    
}

module.exports = ErrorHandler