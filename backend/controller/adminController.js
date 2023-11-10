import { Vehicle } from "../model/Vehicle.js";
import { errorHandler } from "../utils/error.js";



export const createCar = async(req,res,next) =>{
    const {number,status,type} = req.body
    var savedCar;

    try {
        savedCar = new Vehicle({
     
            number:number,
            status:status,
            type:type
        })
    } catch (error) {
        next(errorHandler(error.status,error.message))
    }
    savedCar = await savedCar.save();
    if(!savedCar){

      return res.status(500).json({message:'error while creating'})
    }else{
        return res.status(201).json(savedCar)
    }
}