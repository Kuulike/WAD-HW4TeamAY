// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "insert password here",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
// Note that the "SERIAL"  pseudo-type that is used after the "id" is used to create a sequence object,
// and set the next value generated by the sequence as the default value for the column
const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	"id" SERIAL PRIMARY KEY,         
	"timestamp" DATE,
	"body" VARCHAR(200) NOT NULL  
    );`;

// A function to execute the previous query   
execute(createPostTblQuery).then(result => {
    if (result) {
        console.log('Created the "posttable" table if it did not exist already.');
    }
});

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('Created the "users" table if it did not exist already.');
    }
});

module.exports = pool;
