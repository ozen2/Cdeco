const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import item-related actions
const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/productsActions");

const { uploadImage } = require("../../../middlewares/multer");
const { updateImage } = require("../../../middlewares/multerUpdate");

// Route to get a list of items

// Route to get a specific item by ID
router.get("/", browse);

router.get("/:id", read);

router.put("/edit/:id", updateImage, edit);

router.delete("/delete/:id", destroy);
// Route to add a new item
router.post("/add", uploadImage, add);

/* ************************************************************************* */

module.exports = router;
