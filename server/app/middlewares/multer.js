const multer = require("multer");
const path = require("path");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, "public/assets/images/");
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine, autrement le fichier ne possède pas d'extension
    // le Date.now() permet de renommer le fichier afin qu'ils soient tous unique, c'est une façon simple de s'assurer de l'unicité des fichiers
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const uploadImage = async (req, res, next) => {
    upload.single("image")
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const imageName = req.file.filename;
    console.info(imageName);
    return res
      .status(201)
      .send({ message: "Image uploaded successfully", filename: imageName });
  };

module.exports = { uploadImage };