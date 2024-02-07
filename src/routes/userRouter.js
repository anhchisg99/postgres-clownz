import {
    register,
} from "../controllers/userCtrl.js";
import express from 'express'
const userRouter = express.Router()
userRouter.post("/register",register)

export default userRouter
