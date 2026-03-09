// promise sao em paralelo
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 2', rand(1, 3));;
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o ultimo a ser exibido')
    })
    .catch(e => {
        console.log('ERRO', e);
    }); // pegar erro

    // catch é sempre erro
    // resolve e reject sao convensoes