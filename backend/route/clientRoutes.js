import express from "express"
import { registerInformation } from "../controller/clientController.js";

const clientRouter = express.Router();
clientRouter.post('/register-information',registerInformation)

export default clientRouter