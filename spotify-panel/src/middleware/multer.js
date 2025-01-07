import multer from "multer";

// This middleware extracts the file from the API request and it will provide its path

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage });

export default upload;