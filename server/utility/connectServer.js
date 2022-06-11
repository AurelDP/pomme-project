const { Client } = require('pg');

// The login information below is not confidential because the project is a student project
const config = {
    user: 'Aurelien',
    host: 'db.bit.io',
    database: 'Aurelien/PommeProject',
    password: 'v2_3rgvJ_XGwi6QkzU6Rhk9kpfmg4VHG',
    port: 5432,
    ssl: true,
}

const getPgClient = () => new Client(config);

module.exports = getPgClient;