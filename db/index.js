const {Pool} = require("pg");
require('dotenv').config()


const config = {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: process.env.DATABASE_PORT
}

const pool = new Pool(config);

module.exports = {
    query: (text, params) => pool.query(text, params),
}
