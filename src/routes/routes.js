const express = require("express");
const connection = require("../database/connection");

const app = express();
const router = express.Router();

router.get("/", async (request, response)=> {
    try {
        const conn = await connection.getConnection();

        const consulta = "SELECT * FROM tb_pessoa";

        const rows = await conn.query(consulta);

        response.send(rows);
    }catch(err){
        throw err;
    }
   
})

module.exports = router;

