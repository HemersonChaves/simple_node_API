const PessoaRepository = require("../repository/PessoaRepository");

class CriarPessoasController {

    constructor() {
        this.pessoarepository = new PessoaRepository();
    }
    async handle(request, response) {
        try {

            const result = await this.pessoarepository.criar({nome: "maria"});
            return response.status(200).json(result);
        } catch (e) {
            return response.status(500).json({ erro: "Erro no sistema!" })
        }

    }
}



module.exports = CriarPessoasController;