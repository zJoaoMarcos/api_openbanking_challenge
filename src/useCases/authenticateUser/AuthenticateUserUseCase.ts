import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../database/prismaClient";

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthRequest) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (!userAlreadyExists) {
      throw new Error("User or password incorrect");
    }

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect");
    }

    const token = sign({}, `${process.env.UUID_TOKEN}`, {
      subject: String(userAlreadyExists.id),
      expiresIn: "1d",
    });

    userAlreadyExists.password = undefined;

    return { token, userAlreadyExists };
  }
}
export { AuthenticateUserUseCase };
