import express from "express"
import { SignUp } from "../controllers/authController.js";
const router=express.Router();

//Authentication Routes
router.post('/signup',SignUp);



export default router;