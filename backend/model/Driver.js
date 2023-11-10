import mongoose, { mongo } from "mongoose";

const userSchema  = mongoose.Schema({
    license:{
        type:String,
        required:true
    },
    
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true},
    age:{
        type:Number,
        required:true
    },
    typeOfCar:String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

export const Driver = mongoose.model("Driver",userSchema)