import mongoose from "mongoose";
const teacher = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    Id:{
        type:Number,
        required:true
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
})

const teacherData = new mongoose.model('teacherData',teacher);
export default teacherData;