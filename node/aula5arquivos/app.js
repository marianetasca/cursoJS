const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // caminho absoluto, cria o arquivo
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
// {nome: 'joao'},
// {nome: 'maria'},
// {nome: 'luiz'},
// {nome: 'luiza'},
// ];

// const json = JSON.stringify(pessoas, '', 2); // cria um json em string
// escrever(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados =  await ler(caminho);
    renderizaDados(dados);
}
function renderizaDados(dados) {
    dados = JSON.parse(dados); //JSON.parse → transforma string em objeto/array
    dados.forEach(val => { ///forEach só funciona em array. forEach percorre um array.
        console.log(val);
    });
}
leArquivo(caminhoArquivo);
// const dadosAquivo = leArquivo(caminhoArquivo)
// .then(dados => console.log(dados));
// console.log(dadosAquivo);