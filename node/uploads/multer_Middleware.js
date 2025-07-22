
// multer_Middleware.js

const multer = require('multer');
const fs = require('fs');
const path = require('path');

// ✅ Ensure uploads folder exists
const uploadPath = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    
    destination : (req, file, callback) => {
        callback(null, path.join(__dirname, "../uploads"))
    },
    filename : (req, file, callback) => {
        callback(null, `students_${Date.now()}${path.extname(file.originalname)}`);
    }
})

exports.multer_Middleware = multer({ storage });



