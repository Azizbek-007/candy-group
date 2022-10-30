const { user } = require('../models'); // import user model
const { verify } = require('../service/authService');
const { sendAPI } = require('../service/sendAPI')

exports.authCheck = async(req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        try {
            const decoded = verify(bearerToken);
            req.user_id = decoded.user_id;
            next();
        } catch (err) {
            return sendAPI(res, 401, "Unauthorized")
        }
    } else {
        return sendAPI(res, 401, "Unauthorized")
    }
}

exports.isCeo = async(req, res, next) => {
    const User = await user.findOne({
        where: {
            id: req.user_id
        }
    });
    if (User.role !== 'ceo') {
        return sendAPI(res, 401, "Unauthorized")
    }
    next();
}

exports.isAdmin = async(req, res, next) => {
    const User = await user.findOne({
        where: {
            id: req.user_id
        }
    });
    if (User.role == 'admin' || User.role == 'ceo') {
        next();
    } else {
        return sendAPI(res, 401, "Unauthorized")
    }
}