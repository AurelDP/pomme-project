const { Client } = require('pg');

const config = {
    user: 'Aurelien_demo_db_connection',
    host: 'db.bit.io',
    database: 'bitdotio',
    password: '3F6eA_4SgRPtgsSDPZqvehWYFnR8F',
    port: 5432
}

const getPgClient = () => new Client(config);

module.exports = getPgClient;