import { Request, Response } from "express";
import { GetAllParticipantsUseCase } from "./GetAllParticipantsUseCase";

class GetAllParticipantsController {
  async handle(request: Request, response: Response) {
    const getAllParticipantsUseCase = new GetAllParticipantsUseCase();

    const participants = await getAllParticipantsUseCase.execute();

    return response.json(participants);
  }
}

export { GetAllParticipantsController };
