import express from 'express'
const app=express();
import db from './database/db.js'
import fs from 'fs';
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
import dev from 'dotenv'
dev.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const port=process.env.Port || 3000;
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
app.listen(port,()=>{
    try{
        console.log(`Sever is listen from ${port}`);
    }
    catch(err){
        console.log({err :"Internal"});
    }
});
