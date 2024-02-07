import {
    createImage,
} from "../controllers/imageCtrl.js";
import express from 'express'
const imageRouter = express.Router()
imageRouter.post('/', createImage)
export default imageRouter