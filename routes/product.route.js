const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createANewProduct,
  updateANewProduct,
  deleteAProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createANewProduct);
router.put("/:id", updateANewProduct);
router.delete("/:id", deleteAProduct);

module.exports = router;
