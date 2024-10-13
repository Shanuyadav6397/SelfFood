import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploader = multer({ storage: storageConfig });

export default uploader;