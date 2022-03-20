const express = require("express");
const ListaPessoaController = require("../controller/ListarPessoasController");
const CriarPessoaController = require("../controller/CriaPessoaController");

const router = express.Router();


router.get("/", async (request, response) => {
    const listapessoaController = new ListaPessoaController();
    await listapessoaController.handle(request, response);
});

router.get("/criar", async (request, response) => {
    const criarpessoaController = new CriarPessoaController();
    await criarpessoaController.handle(request, response);
});

module.exports = router;