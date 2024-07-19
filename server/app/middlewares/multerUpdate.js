const { log } = require("console");
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
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const updateImage = (req, res, next) => {
  upload.single("picture")(req, res, (err) => {
    if (req.file) {
      req.body.picture = req.file.filename;
      req.body.path = req.file.path;
      next();
    } else {
      next();
    }
  });
};

module.exports = { updateImage };
