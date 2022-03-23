const utility = require("../utility/index");

const DATABASE_NAME = "Aurelien/PommeProject";
const TABLE_NAME = "products";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const getAllProducts = async () => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT * FROM ${TABLE_PATH}`;

    try {
        const pgResp = await client.query(sqlQuery);
        console.log(pgResp.rows);
        client.end();
        return pgResp.rows;
    } catch(err) {
        console.log(err.stack);
        client.end();
        return null;
    }
}

const addAllProducts = async () => {
    const client = utility.tryToConnect();
    const sqlQuery = `INSERT INTO ${TABLE_PATH}
        VALUES (1, 'ePhone 13', 'Your new superpower', 'require("../assets/13.png")', 949, 187),
        (2, 'ePhone 13 Pro', 'Oh. So. Pro.', 'require("../assets/13Pro.png")', 1399, 153),
        (3, 'MocBook Air', 'Power. It''s in the Air.', 'require("../assets/MacAir.png")', 1299, 432),
        (4, 'MocBook Pro 13''''', 'Power to go.', 'require("../assets/Mac13.png\")', 1699, 305),
        (5, 'PomPods 3rd gen', 'All-new with spatial audio.', 'require("../assets/AirPds.png\")', 239, 567),
        (6, 'ePad Air', 'Powerful. Colourful. Wonderful.', 'require("../assets/iPad air.png\")', 779, 298)`;

    try {
        const pgResp = await client.query(sqlQuery);
        console.log(pgResp.rows);
        client.end();
        return 'success';
    } catch(err) {
        console.log(err.stack);
        client.end();
        return 'error';
    }
}

const removeAllProducts = async () => {
    const client = utility.tryToConnect();
    const sqlQuery = `DELETE FROM ${TABLE_PATH}`;

    try {
        const pgResp = await client.query(sqlQuery);
        console.log(pgResp.rows);
        client.end();
        return 'success';
    } catch(err) {
        console.log(err.stack);
        client.end();
        return 'error';
    }
}

module.exports = {
    getAllProducts,
    addAllProducts,
    removeAllProducts
}