const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o app
const app = express();
//permitir recerber json
app.use(express.json());
//liberar acesso publico
app.use(cors());
// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
