const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import item-related actions
const { browse, read, add } = require("../../../controllers/productsActions");

const { uploadImage } = require("../../../middlewares/multer");

// Route to get a list of items

// Route to get a specific item by ID
router.get("/", browse);
// Route to add a new item
router.post("/add", uploadImage, add);

/* ************************************************************************* */

module.exports = router;
