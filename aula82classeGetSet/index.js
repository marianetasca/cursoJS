// simbol
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { //get e set  c1.velocidade = 55; // quando usa sinal de atribuicao é setter
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <=0) return;
        this[_velocidade] = valor;
    }
    get velocidade() { // quando pede o valor (c1.velocidade);
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}
c1.velocidade = 55; // quando usa sinal de atribuicao é setter
console.log(c1);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}
    const p1 = new Pessoa('maria', 'silva');
    p1.nomeCompleto = 'maria josefa silva';
    console.log(p1.nome);
    console.log(p1.sobrenome);
    console.log(p1.nomeCompleto);