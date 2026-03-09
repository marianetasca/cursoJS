// @ts-nocheck
// IIFE - immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('luis'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);