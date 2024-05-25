const multer = require('multer')



  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
 
  const fileFilter = (req, file, cb) => {
      // validate the file
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      cb(null, true)
    } else {
     cb(new Error("the file must be an Image"), false);
    }
  }

   
  const multerConfig = multer({
    storage: storage,
    fileFilter: fileFilter,
    
  });


  const upload = multer(multerConfig).single("image"); 



module.exports = upload