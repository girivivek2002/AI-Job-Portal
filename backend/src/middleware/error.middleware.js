const errorHandler = (
    err,
    req,
    res,
    next
) => {

    const statusCode =
        err?.statusCode || 500;

    const message =
        err?.message || err || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorHandler;