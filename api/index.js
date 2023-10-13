import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js"
import AuthRouter from "./routes/authRoute.js"
dotenv.config();
const app=express();

//Mounting the Routes
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/auth',AuthRouter);

//middleware for handling errors
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error";
    return res.status(statusCode).json(
        {
            success:false,
            statusCode,
            message,
        }
    );
});


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
    console.log('Server Running On Port',process.env.PORT ,'!')
})