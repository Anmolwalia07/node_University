import { randomInt } from "crypto";
const otp=randomInt(100000,1000000);
import nodeMailer from "nodemailer";
import express from 'express';
const router=express();
const sendMail=(req,res)=>{
    const transporter = nodeMailer.createTransport({
        service:"gmail",
        secure:true,
        port:465,
        auth:{
            user:"anmolwalia025@gmail.com",
            pass:"yjfgkyqtqccpsigo",
        },
        tls: {rejectUnauthorized: false}
    });
    const reciever={
        from :"anmolwalia025@gmail.com",
        to :"anchalw10@gmail.com",
        subject:"Otp verification",
        text:`your otp is ${otp}`,
    }
    transporter.sendMail(reciever,(err,emailResponse)=>{
        if(err){
            res.status(404).json({mess : "error"});
        }else{
            res.status(200).json({messsage : "otp send successfuly "});
        }
    })
};
router.get('/',sendMail);
export default router;