import {
    createCategory,
    getAllCategories,
    getSubCategories,
} from "../controllers/categoryCtrl.js";
import express from 'express'
const categoryRouter = express.Router()
categoryRouter.post('/', createCategory)
categoryRouter.get('/', getAllCategories)
categoryRouter.get('/:parent_id', getSubCategories)
export default categoryRouter