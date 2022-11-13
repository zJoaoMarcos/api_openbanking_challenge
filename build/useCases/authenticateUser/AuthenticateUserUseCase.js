"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const prismaClient_1 = require("../../database/prismaClient");
class AuthenticateUserUseCase {
    async execute({ email, password }) {
        const userAlreadyExists = await prismaClient_1.prismaClient.user.findFirst({
            where: { email },
        });
        if (!userAlreadyExists) {
            throw new Error("User or password incorrect");
        }
        const passwordMatch = (0, bcryptjs_1.compare)(password, userAlreadyExists.password);
        if (!passwordMatch) {
            throw new Error("User or password incorrect");
        }
        const token = (0, jsonwebtoken_1.sign)({}, `${process.env.UUID_TOKEN}`, {
            subject: String(userAlreadyExists.id),
            expiresIn: "1d",
        });
        userAlreadyExists.password = undefined;
        return { token, userAlreadyExists };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
