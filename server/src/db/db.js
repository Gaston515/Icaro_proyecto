const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"vinilos_rock_bd",
    password:"Parana195",
})

module.exports = connection