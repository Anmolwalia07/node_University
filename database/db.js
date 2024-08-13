import mongoose from  'mongoose'
const url='mongodb://127.0.0.1:27017/University'
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
