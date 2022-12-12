// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Punnsilm",
    database: "testWAD",
    host: "localhost",
    port: "5432"
});

module.exports = pool;