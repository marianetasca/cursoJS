// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(falaNome());
// console.log(nome, sobrenome);


const path = require('path');
const axios = require('axios')
const {Pessoa} = require('./mod1'); // para importar o modulo

// axios();
// .then(response => console.log(response.data))
// .catch(e => console.log(e))

const p1 = new Pessoa('luiz');
console.log(p1);