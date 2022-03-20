const express = require("express");
const connection = require("../infra/connection");

const router = express.Router();

router.get("/", async (request, response)=> {
    try {
        console.log("deu certo");
         const conn = await connection.getConnection();

        const consulta = "SELECT * FROM tb_pessoa";

         const rows = await conn.query(consulta);

         response.send(rows);
    }catch(err){
        throw err;
    }
   
});

module.exports =  router;