import express from "express"
import { registerDriver } from "../controller/driverController.js";

const driverRouter = express.Router();

driverRouter.post('/register',registerDriver)

export default driverRouter