import categoryRouter from "./route/category.route.js";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import productRouter from "./route/product.route.js";
import subCategoryRouter from "./route/subCategory.route.js";
import uploadRouter from "./route/upload.router.js";
import userRouter from "./route/user.route.js";

dotenv.config()

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = process.env.PORT || 8080 

app.get("/", (request, response) => {
    ///server to client
    response.json({
        message: "Server is running "+ PORT
    })
})

app.use('/api/user',userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)
app.use("/api/product",productRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/address",addressRouter)
// app.use('/api/order',orderRouter)
connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log("Server is running",PORT)
  })
})