const users = require('../model/users');

async function checkEmailAlreadyUsed(req, res) {
    const email = req.params.email;

    const isUsed = await users.checkEmailAlreadyUsed(email);
    res.send(isUsed);
}

async function registerUser(req, res) {
    const user = req.body;

    const isSuccess = await users.registerUser(user);
    res.send({success: isSuccess});
}

async function loginUser(req, res) {
    const user = req.body;

    const result = await users.loginUser(user);
    res.send(result);
}

module.exports = {
    checkEmailAlreadyUsed,
    registerUser,
    loginUser
}