const express = require("express");
const app = express();
const router = express.Router();
const controller_Pessoa = require("./Pessoa.routes");

router.get("/", controller_Pessoa.route );

module.exports = router;

