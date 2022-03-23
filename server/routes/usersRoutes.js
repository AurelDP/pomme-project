const express = require("express");
const router = express.Router();
const usersController = require('../controller/usersController.js');

router.get('/checkEmailAlreadyUsed/:email', usersController.checkEmailAlreadyUsed);
router.post('/registerUser', usersController.registerUser);
router.post('/loginUser', usersController.loginUser);

module.exports = router;