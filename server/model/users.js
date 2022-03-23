const utility = require("../utility/index");

const DATABASE_NAME = "Aurelien/PommeProject";
const TABLE_NAME = "users";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const checkEmailAlreadyUsed = async email => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT email FROM ${TABLE_PATH}`;

    console.log('email', email);

    try {
        const pgResp = await client.query(sqlQuery);
        let isEmailUsed = false;
        for (let i = 0; i < pgResp.rows.length; i++) {
            if (pgResp.rows[i].email === email) {
                isEmailUsed = true;
                break;
            }
        }
        console.log('isEmailUsed:', isEmailUsed);
        client.end();
        return isEmailUsed;
    } catch(err) {
        console.log(err.stack);
        client.end();
        return null;
    }
}

module.exports = {
    checkEmailAlreadyUsed
}