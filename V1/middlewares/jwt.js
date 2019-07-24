const jwt = require('koa-jwt');
const SECRET = `${process.env.JWT_SECRET}`
const jwtInstance = jwt({secret: SECRET});
const jsonwebtoken = require('jsonwebtoken')

function JWTErrorHandler(ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = {
                "error": "Not Authorized"
            };
        } else {
            throw err;
        }
    });
};

module.exports.jwt = () => jwtInstance
module.exports.errorHandler = () => JWTErrorHandler
module.exports.issue =  (payload) => {
    return jsonwebtoken.sign(payload, SECRET);
};