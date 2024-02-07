
import productService from "../services/productService.js";

const getAllProducts = async(req,res)=>{
    const results = await productService.getAllProductsService()
    res.status(201).json(results)
}
const updateProduct = async(req,res)=>{
    // const {name,author}
    const results = await productService.updateProductService(req.body)
    res.status(201).json(results)

}
const getSpecificProduct = async(req,res)=>{
    const {id} = req.params
    const results = await productService.getSpecificProductService(id)
    res.status(201).json(results)

}
const createProduct = async(req,res)=>{

    const {name,description,price,category_id} = req.body
    // console.log(req.file)
    // let img = req.file.path
    const results = await productService.createProductService({name,description,price,category_id})
    res.status(201).json({
        status:"success",
        results
    })

}
const getProductsBasedOnCategory = async(req,res)=>{

    const {category_id} = req.params
    const results = await productService.getProductsBasedOnCategoryService(category_id)
    res.status(201).json({
        status:"success",
        results
    })

}
const uploadImg = async(req,res)=>{
    const {id} = req.params
    // let {files} = req.path
    const convertedImg = req.files.map((file) => file.path)
    const results = await productService.uploadImgService({variant_product_id:id,url:convertedImg})
    res.status(201).json(results)

}

export {
    getAllProducts,
    updateProduct,
    createProduct,
    getSpecificProduct,
    uploadImg,
    getProductsBasedOnCategory,

}