const path = require("path");

const express = require("express");

const router = express.Router();
const adminControllers = require("../controllers/admin");

router.get("/add-product", adminControllers.addProductPage);
router.post("/add-product", adminControllers.sendAllProducts);
router.get("/products");

module.exports = router;
