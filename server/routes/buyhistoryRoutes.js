const express = require("express");
const router = express.Router();
const buyhistoryController = require('../controller/buyhistoryController.js');

router.post('/addProducts', buyhistoryController.addProducts);
router.post('/getProducts', buyhistoryController.getProducts);

module.exports = router;