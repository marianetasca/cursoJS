const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// function meuMiddleware(req, res, next) {
//     req.session = {nome: 'maria', sobrenome: 'sousa'};
//     console.log();
//     console.log('passei no seu middlware');
//     console.log();
//     next();
// }
// rotas da home
// route.get('/', meuMiddleware, homeController.paginaInicial); // middleware

route.get('/', homeController.paginaInicial); // middleware

// route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
//     console.log();
//     console.log('ainda estou aqui');
//     console.log(`'ultimo middleware, olha oq tem na req.session.nome ${req.session.nome}`);
// }); // middleware

route.post('/', homeController.trataPost);

// rotas de contado
route.get('/contato', contatoController.paginaInicial);

module.exports = route;