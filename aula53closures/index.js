// @ts-nocheck
// closure - habilidade da funcao de acessar seu escopo lexico
function retornaFuncao() {
    const nome = 'luis';
    return function() {
        return nome;
    };
}
const funcao = retornaFuncao();
console.dir(funcao);