const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".").pop();
    const fileName = file.fieldname + "-" + uniqueSuffix + "." + fileExtension;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;