const multer = require("multer");
const path = require("path");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, path.join(__dirname, "../../public/assets/images"));
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

const uploadImage = (req, res, next) => {
  upload.single("picture")(req, res, (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(400).send("Error uploading file.");
    }
    if (!req.file) {
      console.warn("No file uploaded");
      return res.status(400).send("No file uploaded.");
    }
    req.body.picture = req.file.filename;
    next();
  });
};

module.exports = { uploadImage };