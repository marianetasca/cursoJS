const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


route.get('/', homeController.paginaInicial); // middleware

route.post('/', homeController.trataPost);

// rotas de contado
route.get('/contato', contatoController.paginaInicial);

module.exports = route;

// controller vai escolher qual view e model que vai ser utilizado para aquela rota
// model vai trabalhar com tudo que for dado