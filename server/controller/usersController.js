const users = require('../model/users');

async function checkEmailAlreadyUsed(req, res) {
    const email = req.params.email;

    console.log(email);

    const isUsed = await users.checkEmailAlreadyUsed(email);
    res.send(isUsed);
}

module.exports = {
    checkEmailAlreadyUsed,
}