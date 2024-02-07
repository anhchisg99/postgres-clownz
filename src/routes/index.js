import productRouter from "./productRouter.js";
import imageRouter from "./imageRouter.js";
import categoryRouter from "./categoryRouter.js";
import userRouter from "./userRouter.js";

function route(app){
    app.use('/product',productRouter)
    app.use('/image',imageRouter)
    app.use('/category',categoryRouter)
    app.use('/user',userRouter)
}

export default route