// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "enter your database password here",
    database: "testWAD",
    host: "localhost",
    port: "5432"
});

module.exports = pool;
