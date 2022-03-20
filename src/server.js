const express = require("express");
const cors = require("cors");
const routerpessoa = require("./routes/Pessoa.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pessoa", routerpessoa);

app.listen(8888, () => console.log("ta funcionando"));