const express = require("express");
const router = express.Router();
const controller_Pessoa = require("./Pessoa.routes");

router.get("/", controller_Pessoa );

module.exports = router;

