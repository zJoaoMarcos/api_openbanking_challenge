"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllParticipantsController = void 0;
const GetAllParticipantsUseCase_1 = require("./GetAllParticipantsUseCase");
class GetAllParticipantsController {
    async handle(request, response) {
        const getAllParticipantsUseCase = new GetAllParticipantsUseCase_1.GetAllParticipantsUseCase();
        const participants = await getAllParticipantsUseCase.execute();
        return response.json(participants);
    }
}
exports.GetAllParticipantsController = GetAllParticipantsController;
