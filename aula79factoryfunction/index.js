
const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    },
};

const beber = { // composicao/mixing
    beber() {
        console.log(`${this.nome} esta bebendo`)
    },
};

const pessoaPrototype = { ...falar, ...comer, ...beber }; // composicao/mixing
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, { // ja vincula os metodos
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}


const p1 = criaPessoa('maria', 'silva');
const p2 = criaPessoa('marian', 'silva');