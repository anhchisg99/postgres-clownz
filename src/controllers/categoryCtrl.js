
import CategoryService from "../services/categoryService.js";

const createCategory = async(req,res)=>{

    const {name,parent_id} = req.body
    // console.log(req.file)
    // let img = req.file.path
    const results = await CategoryService.createCategoryService({name,parent_id})
    res.status(201).json({
        status:"success",
        results
    })

}
const getAllCategories = async(req,res)=>{

    const results = await CategoryService.getAllCategoriesService()
    res.status(201).json({
        status:"success",
        results
    })

}
const getSubCategories = async(req,res)=>{
    const {parent_id} = req.params
    const results = await CategoryService.getSubCategoriesService(parent_id)
    res.status(201).json({
        status:"success",
        results
    })

}
export {
    createCategory,
    getAllCategories,
    getSubCategories,

}