import mongoose, { mongo } from "mongoose";

const vehicleSchema  = mongoose.Schema(
    {
    
        number: String,
        type: String,
        status: String,
        last_maintenance_date: Date,
        location: String,
       driver: { 
        type: mongoose.Types.ObjectId,
         ref: 'Driver' }
      }
     
)

export const Vehicle = mongoose.model("Vehicle",vehicleSchema)