const mariadb = require("mariadb");

const conn = mariadb.createPool({
    host:"localhost",
    user: "root",
    password:"12345",
    database:"cliente",
})

