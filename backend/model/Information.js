import mongoose, { mongo } from "mongoose";

const informationSchema  = mongoose.Schema({
    netMass:{
        type:String,
        required:true
    },
    countryOfOrigin:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    deliveryLocation:{
        type:String,
        required:true
    },
    pickupLocation:{
        type:String,
        required:true
    },
    insurance:{
        type:String,
        required:true
    },
    parkingList:{
        type:String,
        required:true
    },
    parkingList:{
        type:String,
        required:true
    },
    billsOfLading:{
        type:String,
        required:true
    },
    bankPermits:{
        type:String,
        required:true
    },
    client:String
    // {
    //     type:mongoose.Types.ObjectId,
    //     ref:"Client"
    // }
})

export const Information = mongoose.model("Information",informationSchema)