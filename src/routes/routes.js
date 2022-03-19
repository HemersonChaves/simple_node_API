const express = require("express");
const connection = require("../database/connection");

const app = express();
const router = express.Router();

router.get("/", async (request, response)=> {

    try {
        response.send({nome: "lista de cliente"});
    }catch(err){
        throw err;
    }
   
})

module.exports = router;

