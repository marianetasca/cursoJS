// o metodo tem que ficar no prototype na constructor function
class Pessoa { // o prototype ja vem automatico
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }

}

const p1 = new Pessoa('maria', 'silva');
console.log(p1);