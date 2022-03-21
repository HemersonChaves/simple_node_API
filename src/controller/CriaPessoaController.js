const PessoaRepository = require("../repository/PessoaRepository");

class CriarPessoasController {

    constructor() {
        this.pessoarepository = new PessoaRepository();
    }
    async handle(request, response) {
        try {
            const {nome, cpf, dt_nascimento, sexo} = request.body;
            const result = await this.pessoarepository.criar(nome, cpf, dt_nascimento, sexo);
            return response.status(200).json(result);
        } catch (e) {
            return response.status(500).json({ erro: "Erro no sistema!" })
        }

    }
}



module.exports = CriarPessoasController;