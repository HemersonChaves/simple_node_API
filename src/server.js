const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pessoa", router);

app.listen(8888, () => console.log("ta funcionando"));