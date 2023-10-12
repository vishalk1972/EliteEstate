import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app=express();


// Database Connection 
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log(err.message);
})


// Listening on PORT
app.listen(process.env.PORT,()=>{
    console.log('Server Running On Port 3000 !')
})