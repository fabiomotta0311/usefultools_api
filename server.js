require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27018/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3003);

// oneOf: retorna true qdo nao acha