const buyhistory = require('../repository/buyhistory');

async function getProducts(req, res) {
    const email = req.body;

    const prods = await buyhistory.getProducts(email);
    res.send({result: prods});
}

async function addProducts(req, res) {
    const data = req.body;

    const result = await buyhistory.addProducts(data);
    res.send({status: result});
}

module.exports = {
    getProducts,
    addProducts
}