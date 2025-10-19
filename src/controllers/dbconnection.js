// dbconnection.js
// require('dotenv').config();
// const mysql = require('mysql2');

// const con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to MySQL!");
// });

// module.exports = con;

import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) console.error('❌ DB connection failed:', err.message);
    else console.log('✅ Connected to Clever Cloud MySQL!');
});

export default db;

