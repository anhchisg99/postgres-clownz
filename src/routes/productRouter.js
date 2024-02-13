import {
  getAllProducts,
  updateProduct,
  createProduct,
  getSpecificProduct,
  uploadImg,
  getProductsBasedOnCategory,
} from "../controllers/productCtrl.js";
import upload from "../utils/uploadImg.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getAllProducts);
// #create product
productRouter.post("/", createProduct);
productRouter.get("/category/:category_id", getProductsBasedOnCategory);
productRouter.get("/specific/:id", getSpecificProduct);
productRouter.put("/update", updateProduct);
productRouter.post("/img/:id", upload.array("files"), uploadImg);
export default productRouter;
