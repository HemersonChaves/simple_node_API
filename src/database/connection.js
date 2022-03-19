const mariadb = require("mariadb");

const conn = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "cliente",
})

module.exports = {
    getConnection: function () {
        return new Promise((resolve, reject) => {
            conn.getConnection()
                .then((connection) => {
                    resolve(connection);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    }
}
