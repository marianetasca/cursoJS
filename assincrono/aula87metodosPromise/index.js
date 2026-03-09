function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

// promise.all promise.race promise.resolve promise.reject
const promises = [
    esperaAi('promise 1', rand(1, 5)),
    esperaAi('promise 2', rand(1, 5)),
    esperaAi('promise 3', rand(1, 5)),
    // esperaAi(100, 1000),
];

// Promise.all(promises) // resolve todas
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })

// Promise.race(promises) // entrega o primeiro valor
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })

function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.resolve('pagina em cache');
    } else {
        return esperaAi('baixei a pagina', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));