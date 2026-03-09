const express = require('express');
const app = express(); // ja esta carregando o express

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT   DELETE

// http:/meu site.com/ <- GET -> entrega a pagina / 
// http:/meu site.com/sobre <- GET -> entrega a pagina /sobre

app.get('/', (req, res) => { // rota, funcao
    res.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviartestbb</button>
        </form>`
    );
} );

app.post('/', (req, res) => {
    res.send('recebi o formulario');
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato')
})
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
}); //porta

// node server.js para executar 
