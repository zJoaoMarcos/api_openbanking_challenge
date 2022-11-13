"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const prismaClient_1 = require("../../database/prismaClient");
class CreateUserUseCase {
    async execute({ name, email, password }) {
        const userAlreadyExists = await prismaClient_1.prismaClient.user.findFirst({
            where: { email },
        });
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        const user = await prismaClient_1.prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash,
            },
        });
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
