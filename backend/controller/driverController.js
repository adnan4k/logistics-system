import { Driver } from "../model/Driver.js"

export const registerDriver = async(req,res,next) =>{
     
    const {license,address,phone,age,typeOfCar} = req.body;
    if(!license && !address && !phone &&!age && !typeOfCar){
        return res.status(401).json({message:"provide full infromation"});
    } 
var savedDriver;
try {
    savedDriver = new Driver({
        license:license,
        address:address,
        phone:phone,
        age:age,
        typeOfCar:typeOfCar
    })
} catch (error) {
    next(error)
}
savedDriver = await savedDriver.save()
if(!savedDriver){
    return res.status(500).json({message:"error while creating"})
}
return res.status(200).json(savedDriver);

}