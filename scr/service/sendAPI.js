exports.sendAPI = (res, statusCode, message, payload = []) => {
    if (statusCode.toString()[0] == "2") success = true;
    else if (statusCode.toString()[0] == "3") success = true;
    else success = false;
    return res.status(statusCode).json({
        success: success,
        code: statusCode,
        message: message,
        payload: payload
    })
}