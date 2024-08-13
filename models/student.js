import mongoose, { trusted } from "mongoose";
const student = new mongoose.Schema({
    name :{
        type:String,
        required :true
    },
    age:{
        type:Number,
        required:true
    },
    rollno:{
        type:Number,
        required:true,
        unique:true
    },
    college:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
}

)
const studentData =new mongoose.model('studentData',student);
export default studentData;