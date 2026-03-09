// defineProperty - defineProperties
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,
        writable: false, // valor nao pode ser alterado - false
        configurable: false // nao pode configurar - nao permite apagar nem reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome,
            writable: true, // valor nao pode ser alterado - false
            configurable: true // nao pode configurar - nao permite apagar nem reconfigurar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,
            writable: true, // valor nao pode ser alterado - false
            configurable: true // nao pode configurar - nao permite apagar nem reconfigurar
        },
    })
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}