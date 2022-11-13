"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
class CreateUserController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
        });
        user.password = undefined;
        return response.json(user);
    }
}
exports.CreateUserController = CreateUserController;
