const express = require('express');
const app = express(); // ja esta carregando o express
const routes = require('./routes');
const path = require('path')

app.use(express.urlencoded({extended: true}));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
}); //porta

// node server.js para executar 
