const products = require('../repository/products');

async function getAllProducts(req, res) {
    const prods = await products.getAllProducts();
    res.send(prods);
}

async function addAllProducts(req, res) {
    const isSuccess = await products.addAllProducts();
    console.log(isSuccess);
    res.send({success: isSuccess});
}

async function removeAllProducts(req, res) {
    const isSuccess = await products.removeAllProducts();
    console.log(isSuccess);
    res.send({success: isSuccess});
}

module.exports = {
    getAllProducts,
    addAllProducts,
    removeAllProducts,
}