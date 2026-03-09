function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000; // um sec
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

// esperaAi('fase 1', rand())
//     .then(valor => { console.log(valor);
//         return esperaAi('fase 2', rand())
//      })
//      .then(fase => {
//         console.log(fase);
//         return esperaAi('fase 3', rand())
//      })
//      .then(fase => {
//         console.log(fase);
//      })
//      .then(fase => {
//         console.log('terminamos na fase:', fase);
//      })
//      .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await esperaAi(1, rand());
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);
        console.log('terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
  
}
executa()