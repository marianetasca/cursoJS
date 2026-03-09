// const nome = 'luiza';
// const sobrenome = 'miranda';

// const falaNome = () => nome + ' ' + sobrenome;


// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;


// console.log(module.exports) //node


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'luiza';
const sobrenome = 'miranda';

module.exports = { // para exportar varias coisas ao mesmo tempo
    nome, sobrenome, Pessoa
};
          //chave
// exports.outraCoisa = 'outra coisa';