import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        cloud_apikey: process.env.CLOUDINARY_API_KEY,
        cloud_secretkey: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary;