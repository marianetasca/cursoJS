require('dotenv').config();



const express = require('express');
const app = express(); // ja esta carregando o express
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('conectei a base de dados');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session'); // vai salvar a sessao na memoria
const { MongoStore } = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))
// app.use(express.static('./public'))

const sessionOptions = session({
    secret: 'cdone0r9neirnvieb',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // milessimo de seg 7 dias
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// nossos proprios middlewares
app.use(meuMiddleware); // todas as requisicoes vao passar por esse middleware global
app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    }); //porta
});


// node server.js para executar 
