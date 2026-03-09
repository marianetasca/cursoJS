const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


route.get('/', homeController.paginaInicial); // middleware

route.post('/', homeController.trataPost);

// rotas de contado
route.get('/contato', contatoController.paginaInicial);

module.exports = route;