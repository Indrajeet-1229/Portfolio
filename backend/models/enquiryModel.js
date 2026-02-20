import mongoose  from "mongoose";

const enquirySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

const enquiryModel=mongoose.model('enquiry', enquirySchema);

export default enquiryModel;
