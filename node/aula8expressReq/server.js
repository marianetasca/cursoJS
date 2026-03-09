const express = require('express');
const app = express(); // ja esta carregando o express

app.use(express.urlencoded({extended: true}));

// http:/profile5?campanha=googleleads&nomeCampanha=sla <- url params query string

app.get('/', (req, res) => { // rota, funcao
    res.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="nome"> 
        <button>Enviartestbb</button>
        </form>`
    );// nome vem daqui
} );

app.get('/testes/:idUsuarios?/:parametro?', (req, res) =>{ // ? = opcionar
    console.log(req.query) /// profile/?chave1=valor1
    console.log(req.params); /// profile/3
    res.send(req.params.idUsuarios);
    res.send(req.query.facebookprofile);
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`oq voce me enviou foi: ${req.body.nome}`); //nome
});


app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
}); //porta

// node server.js para executar 
