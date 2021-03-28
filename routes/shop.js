const path = require("path");

const express = require("express");
const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/", shopControllers.getAllProducts);
router.get("/products");
router.get("/cart");
router.get("/checkout");

module.exports = router;
