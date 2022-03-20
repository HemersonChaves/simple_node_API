
const connection = require("../infra/connection");
class PessoaRepository {
    async listar() {
        try {
            const conn = await connection.getConnection();

            const consulta = "SELECT * FROM tb_pessoa";

            const rows = await conn.query(consulta);

            return (rows);
        } catch (err) {
            throw err;
        }

    }
    async criar(pessoa) {
        try {
            const conn = await connection.getConnection();

            const consulta = "INSERT INTO tb_pessoa (nome, cpf, dt_nascimento, sexo) values (?, ?, ?, ?)";
            const rows = await conn.query(consulta, ["maria","12345565", "2012/12/12", "M"]);
            return (rows);
        } catch (err) {
            throw err;
        }

    }
}

module.exports = PessoaRepository;