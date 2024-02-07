import {
    createImage,
} from "../db/image.js";

class ImageService {
    createImageService = async (image) => {
        try {

            return await createImage(image);
        } catch (error) {
            throw new Error("not create image!!")
        }
    }
   
   
}
export default new ImageService