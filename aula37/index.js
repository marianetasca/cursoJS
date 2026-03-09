// @ts-nocheck

// const nome = 'maria silva';
const nome = ['maria silva', 'robson'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

for (let valor of nome) {
    console.log(valor);
}

nome.forEach(function(valor, i, array) {
    console.log(valor, i, array);
});