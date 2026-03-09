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

const session = require('express-session'); // vai salvar a sessao na memoria, vai salvar um cookie
const { MongoStore } = require('connect-mongo');
const flash = require('connect-flash'); // assim que vc ler a msg ela nao vai aparecer mais

const routes = require('./routes');
const path = require('path'); // para trabalhar com caminhos
const helmet = require('helmet'); 
const csrf = require('csurf'); // tokens, para segurança
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware'); // os middleware

app.use(helmet());

app.use(express.urlencoded({ extended: true })); // pode postar formularios para dentro da aplicacao
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public'))) // tudo que estiver dentro da pasta public vai poder ser acessada diretamente
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

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que renderizamos na tela
app.set('view engine', 'ejs'); // engine que sera responsavel por renderizar as views

app.use(csrf());
// nossos proprios middlewares
app.use(middlewareGlobal); // todas as requisicoes vao passar por esse middleware global
app.use(checkCsrfError); 
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    }); //porta
});


// node server.js para executar 
