"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing",
        });
    }
    const [, token] = authToken.split(" ");
    try {
        (0, jsonwebtoken_1.verify)(token, `${process.env.UUID_TOKEN}`);
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: "Token invalid",
        });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
