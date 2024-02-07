import {
    createCategory,
    getAllCategories,
    getSubCategories,
} from "../db/category.js";

class CategoryService {
    createCategoryService = async (category) => {
        try {

            return await createCategory(category);
        } catch (error) {
            throw new Error("not create category!!")
        }
    }
    getAllCategoriesService = async () => {
        try {

            return await getAllCategories();
        } catch (error) {
            throw new Error("not get all category service!!")
        }
    }
    getSubCategoriesService = async (parent_id) => {
        try {

            return await getSubCategories(parent_id);
        } catch (error) {
            throw new Error("not get sub category service!!")
        }
    }
   
   
}

export default new CategoryService