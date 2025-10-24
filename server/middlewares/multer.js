import multer from "multer";

// Configure multer storage
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage });

export default upload;
