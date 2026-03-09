// @ts-nocheck
function relogio(){
    function getTimeFromSec(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}
const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSec(seconds);
    }, 1000)
}
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0;
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio()
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
});
}

relogio()

// iniciar.addEventListener('click', function (e) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer);
//     iniciarRelogio()
// });
// pausar.addEventListener('click', function (e) {
//     relogio.classList.add('pausado')
//     clearInterval(timer);
// });
// zerar.addEventListener('click', function (e) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     seconds = 0;
// });