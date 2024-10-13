import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "../config/serverConfig.js";
import cloudinary from ('cloudinary').v2;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const cloudinaryMiddleware = async(LocalPath) => {
    try {
        // 1. Check if there is a file
        if(!LocalPath){
            throw new Error('No file selected');
        }
        // 2. Upload the file to cloudinary
            const result  = await cloudinary.uploader.upload(LocalPath,{
                resource_type: 'auto'
            });
        // 3. Delete the file from the local storage
        fs.unlinkSync(LocalPath);

        console.log(result);
        console/log(result.url);
        // 4. Return the result
        return result;
    } catch (error) {
        fs.unlinkSync(LocalPath);
        console.log(error);
        return null;
    }
}

export default cloudinaryMiddleware;