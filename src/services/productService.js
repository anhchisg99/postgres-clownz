import {
    createProduct,
    getAllProducts,
    delProduct,
    getSpecificProduct,
    uploadImg,
    getProductsBasedOnCategory,
} from "../db/product.js";

class ProductService {
    createProductService = async (product) => {
        try {

            return await createProduct(product);
        } catch (error) {
            throw new Error("not create product!!")
        }
    }
    
    getSpecificProductService = async (id) => {
        try {

            return await getSpecificProduct(id);
        } catch (error) {
            throw new Error("not get specifics product!!")
        }
    }

    getAllProductsService = async () => {
        try {

            return await getAllProducts();

        } catch (error) {
            throw new Error("not create product!!")

        }
    }
    getProductsBasedOnCategoryService = async (category_id) => {
        try {

            return await getProductsBasedOnCategory(category_id);

        } catch (error) {
            throw new Error("not create product!!")

        }
    }
    delProductService = async (id) => {
        try {

            return await delProduct(id);

        } catch (error) {
            throw new Error("not create product!!")

        }

    }
    uploadImgService = async (img) => {
        try {

            return await uploadImg(img);
        } catch (error) {
            throw new Error("not uploads img!!")
        }
    }
   
}
export default new ProductService