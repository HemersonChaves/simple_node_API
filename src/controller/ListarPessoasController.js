const PessoaRepository = require("../repository/PessoaRepository");

class ListarPessoasController {

    constructor() {
        this.pessoarepository = new PessoaRepository();
    }
    async handle(request, response) {
        try {

            const result = await this.pessoarepository.listar();
            return response.status(200).send(result);
        } catch (e) {
            return response.status(500).json({ erro: "Erro no sistema" })
        }

    }
}



module.exports = ListarPessoasController;