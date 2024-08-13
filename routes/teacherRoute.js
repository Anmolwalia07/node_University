import express from 'express';
import teacherData from '../models/techer.js';
import bodyParser from 'body-parser';
const router=express();
router.use(bodyParser.json());
router.get('/', async(req,res)=>{
    try{
        const teacher=await teacherData.find();
        res.status(200).json(teacher);
    }
    catch(err){
        res.status(404).json({err :"Internal"});
    }
})
router.post('/',async (req,res)=>{
    try{
        const teacher=await teacherData.create(req.body);
        const response= await teacher.save();
        console.log(response);
        res.status(201).json(response);
    }
    catch(err){
        res.status(404).json({err :"Internal"});
    }
})
router.get('/:Id',async (req,res)=>{
    try{
        const id=req.params.Id;
        const teacher=await teacherData.find({Id : id});
        console.log(teacher);
        res.status(200).json(teacher);
    }
    catch(err){
        res.status(404).json({err :"Internal"});
    }
})
export default router;