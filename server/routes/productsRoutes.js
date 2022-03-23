const express = require("express");
const router = express.Router();
const productsController = require('../controller/productsController.js');

router.get('/getAllProducts', productsController.getAllProducts);
router.get('/addAllProducts', productsController.addAllProducts);
router.get('/removeAllProducts', productsController.removeAllProducts);

module.exports = router;