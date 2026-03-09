// produto -> aumento, desconto
// camiseta = cor, caneca = material
// prototype = objeto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};



// especializacao
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(precentual) {
    this.preco = this.preco + (this.preco * (precentual / 100)) // mudamos o comportamento de aumento
}


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) // argumentos do produto
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, // nao pode sobscrever
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'preta');
const caneca = new Caneca('caneca', 13, 'plastico', 5);
caneca.estoque = 100;

console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);
console.log(produto);

// Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.