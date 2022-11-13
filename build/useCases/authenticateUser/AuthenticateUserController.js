"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase();
        const { token, userAlreadyExists } = await authenticateUserUseCase.execute({
            email,
            password,
        });
        return response.status(200).send({ user: userAlreadyExists, token: token });
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
