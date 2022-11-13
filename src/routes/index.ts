import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetAllParticipantsController } from "../useCases/getAllParticipants/GetAllParticipantsController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getAllParticipantsController = new GetAllParticipantsController();

router.post("/register", createUserController.handle);
router.post("/auth", authenticateUserController.handle);
router.get(
  "/participants",
  ensureAuthenticated,
  getAllParticipantsController.handle
);

export { router };
