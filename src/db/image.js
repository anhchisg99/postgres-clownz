import pool from '../../config/index.js'


const createImage = async({variant_id,url})=>{
    const {rows:image} = await pool.query(`insert into image(variant_product_id,url) values($1,$2)`,[variant_id,url])
    return image[0]
}

export {
    createImage,
}