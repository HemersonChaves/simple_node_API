const express = require("express");
const PessoaRepository = require("../repository/PessoaRepository");

const router = express.Router();
const pessoarepository = new PessoaRepository();
router.get("/", async (request, response)=> {
  const result = await pessoarepository.listar();
  response.status(200).send(result);
});

module.exports =  router;