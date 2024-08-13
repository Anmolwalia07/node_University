import studentData from "../models/student.js";
import express from "express";
import bodyParser from "body-parser";
const router =express();
router.use(bodyParser.json());
router.post("/", async(req, res) => {
    try{
    const student = new studentData(req.body);
    const response= await student.save();
    res.status(200).json(response);
    console.log("Data is saved in data base")
    }
    catch(err){
        console.log(err);
    } 
})
router.get('/',async(req,res)=>{
    try{
        const data = await studentData.find();
        console.log(`data is fetched from datbase ${data}`);
        res.status(200).json(data);
    }
    catch(err){
        res.status(404).json(err);
    }
})
router.get('/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const data=await studentData.find({rollno : id});
        console.log(data);
        res.status(200).json(data);
    }
    catch(err){
        res.status(404).json({err :"Internal"});
    }
})
router.put('/:id', async (req,res)=>{
    try{
        const studentId = req.params.id;
        const data =req.body;
        const response = await studentData.findByIdAndUpdate(studentId,data,{
            new:true,
            runValidators:true, 
        })
        if(!response){
            return res.status(404).json({message:"Student not found"})
        }
        console.log("DATA UPDATED");
        res.status(200).json(response);
    }
    catch(err){
        res.status(404).json(err);
    }
})
router.delete('/delete/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await studentData.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({message:"Student not found"});
        }
        console.log("DATA DELETED");
    }
    catch(err){
        res.status(404).json(err);
    }
})
export default router;