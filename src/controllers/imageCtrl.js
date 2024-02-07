
import ImageService from "../services/imageService.js";

const createImage = async(req,res)=>{

    const {variant_id,url} = req.body
    // console.log(req.file)
    // let img = req.file.path
    const results = await ImageService.createImageService({variant_id,url})
    res.status(201).json({
        status:"success",
        results
    })

}
export {
    createImage,

}