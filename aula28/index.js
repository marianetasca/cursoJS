// @ts-nocheck

// const tresHoras = 60 * 60 * 3 * 1000;
// const data1 = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix
// const data = new Date(2019, 3); // a, m, d, h, min, seg, ms
// console.log('dia', data.getDate);
// console.log('mes', data.getMonth);
// console.log('ano', data.getFullYear);
// console.log('hora', data.getHours);
// console.log('minuto', data.getMinutes);
// console.log('segundo', data.getSeconds);
// console.log('milisegundo', data.getMilliseconds);
// console.log('dia da semanda', data.getDay); //0 - domingo 6 - sabado
// console.log(data.toString()); 
// console.log(Date.now()); 

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
