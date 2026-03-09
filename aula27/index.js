const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : "usuario normal";

const corUsuario = null;
const corPadrao = corUsuario || 'preta'
console.log(nivelUsuario, corPadrao);
