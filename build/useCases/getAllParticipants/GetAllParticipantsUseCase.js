"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllParticipantsUseCase = void 0;
const axios_1 = __importDefault(require("axios"));
class GetAllParticipantsUseCase {
    async execute() {
        try {
            const { data } = await axios_1.default.get(`${process.env.URL_API_PARTICIPANTS}`);
            return data;
        }
        catch (err) {
            throw new Error("Error loading participants");
        }
    }
}
exports.GetAllParticipantsUseCase = GetAllParticipantsUseCase;
