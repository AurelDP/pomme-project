const utility = require("../utility/index");
const bcrypt = require('bcrypt');

const DATABASE_NAME = "Aurelien/PommeProject";
const TABLE_NAME = "users";

const TABLE_PATH = `"${DATABASE_NAME}"."${TABLE_NAME}"`;

const checkEmailAlreadyUsed = async email => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT email FROM ${TABLE_PATH}`;

    try {
        const pgResp = await client.query(sqlQuery);
        let isEmailUsed = false;
        for (let i = 0; i < pgResp.rows.length; i++) {
            if (pgResp.rows[i].email === email) {
                isEmailUsed = true;
                break;
            }
        }
        client.end();
        return isEmailUsed;
    } catch (err) {
        console.log(err.stack);
        client.end();
        return null;
    }
}

const registerUser = async user => {
    const client = utility.tryToConnect();
    const passwordHash = await bcrypt.hash(user.password, 10);

    const sqlQuery = `INSERT INTO ${TABLE_PATH} VALUES ('${user.username}', '${passwordHash}', '${user.email}', null, null, null)`;

    try {
        const pgResp = await client.query(sqlQuery);
        client.end();
        return "success";
    } catch (err) {
        console.log(err.stack);
        client.end();
        return "error";
    }
}

const loginUser = async user => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT * FROM ${TABLE_PATH} WHERE email = '${user.email}'`;

    try {
        const pgResp = await client.query(sqlQuery);
        client.end();
        if (pgResp.rows.length === 0)
            return {error: "email not found"};
        else {
            const passwordHash = pgResp.rows[0].password;
            const isPasswordCorrect = await bcrypt.compare(user.password, passwordHash);
            if (isPasswordCorrect)
                return {success: pgResp.rows[0].email};
            else
                return {error: "password incorrect"};
        }
    } catch (err) {
        console.log(err.stack);
        client.end();
        return "error";
    }
}

const updateUser = async (user, email) => {
    const client = utility.tryToConnect();
    const sqlQuery = `UPDATE ${TABLE_PATH} SET address = '${user.address}', creditname = '${user.creditname}', creditnumber = '${user.creditnumber}', expirationdate = '${user.expirationdate}' WHERE email = '${user.email}'`;

    try {
        const pgResp = await client.query(sqlQuery);
        client.end();
        return "success";
    } catch (err) {
        console.log(err.stack);
        client.end();
        return "error";
    }
}

const getUserInfo = async (email) => {
    const client = utility.tryToConnect();
    const sqlQuery = `SELECT * FROM ${TABLE_PATH} WHERE email = '${email.email}'`;

    try {
        const pgResp = await client.query(sqlQuery);
        client.end();
        return pgResp.rows[0];
    } catch (err) {
        console.log(err.stack);
        client.end();
        return null;
    }
}

module.exports = {
    checkEmailAlreadyUsed,
    registerUser,
    loginUser,
    updateUser,
    getUserInfo
}