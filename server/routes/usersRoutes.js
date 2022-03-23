const express = require("express");
const router = express.Router();
const usersController = require('../controller/usersController.js');

router.get('/checkEmailAlreadyUsed/:email', usersController.checkEmailAlreadyUsed);

module.exports = router;