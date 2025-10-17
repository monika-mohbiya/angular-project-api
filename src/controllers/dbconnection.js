// // dbconnection.js
// const mysql = require("mysql")

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'crud_db1'
// })

// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to MySQL!");
// });

// module.exports = con;


// dbconnection.js
require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = con;
