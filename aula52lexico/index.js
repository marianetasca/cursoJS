// @ts-nocheck

// escopo lexico - funcao lembra onde foi declarada

const nome = 'luis';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'otavio';
    falaNome();
}
usaFalaNome();