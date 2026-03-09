// defineProperty - defineProperties
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // nao pode configurar - nao permite apagar nem reconfigurar
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('bad value');
                return;
            }
            console.log(valor);
        }
    });

}

const p1 = new Produto('camiseta', 20, 3);
// console.log(p1);
console.log(p1.estoque);