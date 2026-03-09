// @ts-nocheck

// factory function
// constructor function - funcao construtora
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto = 'nada') {
            return `${nome} esta falando ${assunto}.`;
        },

        altura: altura,
        peso: peso,
    
        // getter para só obter o valor - deixar de ser funcao
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('joao', 'matos', 1.80, 80);
p1.nomeCompleto = 'maria tereza silva'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
// const p2 = criaPessoa('maria', 'silva', 1.60, 50);
// console.log(p1.fala('sobre js'));
// console.log(p2.imc);
// console.log(p2.nomeCompleto);