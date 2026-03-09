// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__:Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__:Object.prototype
};
const objC = {
    chaveC: 'C'
    // __proto__:Object.prototype
};
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(precentual) {
    this.preco = this.preco - (this.preco * (precentual / 100))
};
Produto.prototype.aumento = function(precentual) {
    this.preco = this.preco + (this.preco * (precentual / 100))
};

const p1 = new Produto('camiseta', 50);
p1.desconto(100);


const p2 = {
    nome:'caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);


const p3 = Object.create(Produto.prototype, {
    preco: { // chaves
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
});
p3.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);