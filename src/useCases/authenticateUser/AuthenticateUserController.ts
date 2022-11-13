import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const { token, userAlreadyExists } = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).send({ user: userAlreadyExists, token: token });
  }
}

export { AuthenticateUserController };
