const express = require("express");
const ListaPessoaController = require("../controller/ListarPessoasController");

const router = express.Router();


router.get("/", async (request, response) => {
    const listapessoaController = new ListaPessoaController();
    await listapessoaController.handle(request, response);
});

module.exports = router;