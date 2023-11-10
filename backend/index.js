import express from "express"
import mongoose  from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./route/userRoutes.js";
import adminRouter from "./route/adminRoutes.js";
import driverRouter from "./route/driverRoutes.js";
import clientRouter from "./route/clientRoutes.js";

const app = express()
app.use(express.json());
dotenv.config()

//routes
app.use('/user',userRoutes);
app.use('/admin',adminRouter);
app.use('/driver',driverRouter);
app.use('/client',clientRouter);


mongoose.connect(process.env.MONGO)
.then(()=>{
   app.listen(process.env.PORT,()=>{
    console.log("app is listining",process.env.PORT)
   })
})
   