import multer from 'multer';
import path from "path";


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/productImg');
    },
    filename (req, file, cb) {
       return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|webp|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}).single('image');

export default upload;


