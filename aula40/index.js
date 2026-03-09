// @ts-nocheck
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let numero of numeros) {
//     if (numero === 2) {
//         console.log('pulei o numero 2')
//         continue; //ele pula pro proximos
//     }
//     if (numero === 5) {
//         continue; //ele pula pro proximos
//     }

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...')
//         break;
//     }
//     console.log(numero);
// }

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('pulei o numero 2')
        i++; // precisar vir antes do continue ou break
        continue; //ele pula pra proxima iteracao
    }
    if (numero === 5) {
        i++;
        continue; //ele pula pro proximos
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }
    i++
    console.log(numero);
}