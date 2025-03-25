import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})



const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "TestimonialUploads",
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp', 'mp4', 'avi', 'mov', 'wmv'],
        resource_type: 'auto'
    } as any
})


export const multerUpload = multer({
    storage : storage,
    limits : {
        fieldSize : 100 * 1024 * 1024 // this is fc 100mb hope it wont get filled early
    }
})
.fields([
    {name : "customerimage", maxCount : 1},
    {name : "videoFile", maxCount : 1}
])


