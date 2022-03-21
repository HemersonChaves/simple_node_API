
const connection = require("../infra/connection");
class PessoaRepository {
    async listar() {
        try {
            const conn = await connection.getConnection();

            const consulta = "SELECT * FROM tb_pessoa ";

            const rows = await conn.query(consulta);

            return (rows);
        } catch (err) {
            throw err;
        }

    }
    async criar(nome, cpf, dt_nascimento, sexo) {
        try {
            const conn = await connection.getConnection();
            console.log({nome, cpf, dt_nascimento, sexo})
            const consulta = "INSERT INTO tb_pessoa (nome, cpf, dt_nascimento, sexo) values (?, ?, ?, ?)";
            //tratar erro de data
            const rows = await conn.query(consulta, ['rocketseat', '00000011111','2021/11/11/','m']);
            return (rows);
        } catch (err) {
            console.log(err);
            throw err;
        }

    }
}

module.exports = PessoaRepository;