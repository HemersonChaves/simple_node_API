
const connection = require("../infra/connection");
class PessoaRepository{
    async listar() {
        try {
            console.log("deu certo");
             const conn = await connection.getConnection();
    
            const consulta = "SELECT * FROM tb_pessoa";
    
             const rows = await conn.query(consulta);
    
             return(rows);
        }catch(err){
            throw err;
        }
       
    }
}

module.exports =   PessoaRepository;