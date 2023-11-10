import mongoose, { mongo } from "mongoose";

const clientSchema = mongoose.Schema({
    dateOfBirth:{
        type:Date,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})