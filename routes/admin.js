const path = require("path");

const express = require("express");

const router = express.Router();
const productsControllers = require("../controllers/products");

router.get("/add-product", productsControllers.addProductPage);
router.post("/add-product", productsControllers.sendAllProducts);

module.exports = router;
