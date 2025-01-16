import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import uploadImageController from "../controllers/uploadImage.controller.js";
import { Router } from "express";

const uploadRouter = Router()

uploadRouter.post("/upload",auth,upload.single("image"),uploadImageController)

export default uploadRouter