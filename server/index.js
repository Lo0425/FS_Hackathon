const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const { PORT, DB_HOST, DB_PORT, DB_NAME } = process.env;

app.use("/users", require("./api/users"));
app.use("/request", require("./api/request"));
app.use("/performance", require("./api/performance"));

app.listen(PORT, () => console.log("Server is running in PORT " + PORT));
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
