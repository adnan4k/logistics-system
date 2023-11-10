import { Information } from "../model/Information.js";

export const registerInformation = async(req,res,next) =>{
    const { netMass,
    countryOfOrigin,
    description,
    deliveryLocation,
    pickupLocation,
    insurance,
    parkingList,
    billsOfLading,
    bankPermits,
    client
       } = req.body
    try {
        const createdInfo = new Information({
            netMass:netMass,
            countryOfOrigin:countryOfOrigin,
            description:description,
            deliveryLocation:deliveryLocation,
            pickupLocation:pickupLocation,
            insurance:insurance,
            parkingList:parkingList,
            billsOfLading:billsOfLading,
            bankPermits:bankPermits,
            client:client
        })
    const savedInfo = await createdInfo.save()
    if(!savedInfo){
        return res.status(500).json({message:"internal error while creating"})
    }

    return res.status(200).json(savedInfo)

    } catch (error) {
        next(error)
    }
}