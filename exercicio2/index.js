// @ts-nocheck

// const data = new Date();
// const h1 = document.querySelector('#container h1');
// h1.innerHTML = data.toDateString(diaSemana);

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             break;

//         case 1:
//             diaSemanaTexto = 'Segunda';
//             break;

//         case 2:
//             diaSemanaTexto = 'Terça';
//             break;

//         case 3:
//             diaSemanaTexto = 'Quarta';
//             break;

//         case 4:
//             diaSemanaTexto = 'Quinta';
//             break;

//         case 5:
//             diaSemanaTexto = 'Sexta';
//             break;

//         case 6:
//             diaSemanaTexto = 'Sabado';
//             break;
function zeroAEsquerda(num){
    return num >=10 ? num : 0`${num}`;
}

//         default:
//             diaSemanaTexto = '';
//             break;
//     }
// }
// h1.innerHTML = getDiaSemanaTexto(data.getDay())

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: "full", timeStyle: "short" });

function zeroAEsquerda (num) {
    return num >=10 ? num : 0`${num}`;
}