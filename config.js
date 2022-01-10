//connecting to Potsgres database from Node
require('dotenv').config()          // dot config
const Pool = require('pg').Pool
/*const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'SQL8103!',
    port: 5432
})
*/
// set environment to production to ensure minimal logging and optimize performance
const production = process.env.NODE_ENV === 'production'
const connection = `postgresql://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new Pool({
    connectionString:production ? process.env.DATABASE_URL:connection,ssl:{rejectUnauthorized: false},production
})
module.exports = pool