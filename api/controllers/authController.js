import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"
export const SignUp=async(req,res,next)=>{
    //get data from req
    const {username , email ,password}=req.body;

    // hash password first
    const hashedPassword=bcryptjs.hashSync(password,10);

    //add to db
    const newUser=new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User Created Succesfully");
    }catch(error){
        next(error);
    }  
} 