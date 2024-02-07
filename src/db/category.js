import pool from '../../config/index.js'



const createCategory = async({name,parent_id})=>{
    const {rows:category} = await pool.query(`insert into category(name,parent_id) values($1,$2)`,[name,parent_id])
    return category[0]
}
const getAllCategories = async()=>{
    const {rows:categories} = await pool.query(`select name from category where parent_id is null;`)
    return categories
}
const getSubCategories = async(parent_id)=>{
    const {rows:subCategory}  = await pool.query(`select name from category where parent_id=$1`,[parent_id])
    return subCategory
}
export {
    createCategory,
    getAllCategories,
    getSubCategories,
}