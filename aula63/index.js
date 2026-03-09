const nomes = ['eduardo', 'maria', 'fabio', 'junior', 'mateus'];

// nomes.slipe(indice, delete, elem1, elem2, elem3);

// pop e push
// const removidos = nomes.splice(-1, 1); 
nomes.splice(nomes.length, 0, 'luiz');

// shitft e unshift
// const removidos = nomes.splice(0, 1); 
nomes.splice(0, 0, 'luiz');


// const removidos = nomes.splice(2, 0, 'luiz'); 
// const removidos = nomes.splice(2, 1, 'luiz'); // para remover e adicionar luiz no lugar do outro
// const removidos = nomes.splice(-2, Number.MAX_VALUE); // para ir ate o final

console.log(nomes);
// console.log(nomes, removidos);