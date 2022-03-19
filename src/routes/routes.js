const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (request, response)=> {
    response.send({nome: "rota index"});
})

module.exports = router;

