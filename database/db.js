import mongoose from  'mongoose'
import dev from 'dotenv'
dev.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// for local
// const url=process.env.mongodbLocalURL;
// for cloud
const url=process.env.mongoURL;
mongoose.connect(url);
const db =mongoose.connection;
db.on('connected' ,()=>{
    console.log("Connected to database");
    }
);
db.on('disconnected',()=>{
    console.log("Database is disconnected");
});
db.on('error',(error)=>{
    console.log(error);
});
export default db;
