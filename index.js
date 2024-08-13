import express from 'express'
const app=express();
import db from './database/db.js'
import fs from 'fs';
const port=800;
import studentRoute from './routes/studentRoute.js';
import teacherRoute from './routes/teacherRoute.js';
import otpRoute from './otp.js'; 
const logFile=(req,res,next)=>{
    const data=`new ${Date().toString()} ${req.originalUrl} ${req.method} \n`;
    fs.appendFile('log1.txt',data,(err)=>{
        console.log("DATA IS SEND TO LOG FILE");
    })
    next();
};
app.use(logFile);
app.get('/',(req,res)=>{
    try{
        res.send("hello");
    }
    catch(err){
        console.log(err);
    }
    
})
app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);
// app.use('/user/otp',otpRoute); 
app.listen(800,()=>{
    try{
        console.log(`Sever is listen from ${port}`);
    }
    catch(err){
        console.log({err :"Internal"});
    }
});
