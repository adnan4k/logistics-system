import express from "express"
import { createCar } from "../controller/adminController.js"

const adminRouter = express.Router()

adminRouter.post('/create-car',createCar)
export default adminRouter