import axios from "axios";

class GetAllParticipantsUseCase {
  async execute() {
    try {
      const { data } = await axios.get(`${process.env.URL_API_PARTICIPANTS}`);
      return data;
    } catch (err) {
      throw new Error("Error loading participants");
    }
  }
}

export { GetAllParticipantsUseCase };
