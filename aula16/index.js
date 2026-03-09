const alunos = ['luis', 'maria', 'joao'];
// alunos[0] = 'eduardo';
// alunos[3] = 'luiza';

// alunos[alunos.length] = 'luiza'; //adiciona fim
// alunos[alunos.length] = 'fabio';

alunos.push('murilo'); // adiciona fim
alunos.push('marta');

// alunos.unshift('luiza'); // adiciona começo

// const removido = alunos.pop(); // remove final

// const removido = alunos.shift(); // remove inicio

// delete alunos[1]; // deleta, mas mantem o indice nulo

console.log(alunos.slice(0, -2));
// console.log(alunos[1]);
console.log(alunos);
// console.log(removido);
console.log(alunos.length);