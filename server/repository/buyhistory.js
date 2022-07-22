const utility = require("../utility/index");

const DATABASE_NAME = "Aurelien/PommeProject";
const TABLE_NAME = "buyhistory";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const getProducts = async email => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT * FROM ${TABLE_PATH} WHERE email = '${email.email}'`;

    try {
        const pgResp = await client.query(sqlQuery);
        client.end();
        return pgResp.rows;
    } catch(err) {
        console.log(err.stack);
        client.end();
        return null;
    }
}

const addProducts = async (data) => {
    const client = utility.tryToConnect();
    const email = data.email;
    const userProducts = data.userProducts;

    for (let i = 0; i < userProducts.length; i++) {
        const sqlQuery = `INSERT INTO ${TABLE_PATH} VALUES ('${userProducts[i].title}', '${userProducts[i].quantity}', '${email}')`;
        try {
            const pgResp = await client.query(sqlQuery);
        } catch(err) {
            console.log(err.stack);
            return "error";
        }
    }

    client.end();
    return "success";
}

module.exports = {
    getProducts,
    addProducts
}