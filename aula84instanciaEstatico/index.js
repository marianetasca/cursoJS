// Um método estático: Pertence à classe, não à instancia, ele nao usa this da instancia
/**
* Em método normal: this → a instância
* Em método static: this → a classe

class não criou um novo tipo
Continua sendo function
Só mudou a forma de escrever
 */
function teste() {
    console.log('este é meu teste', this)
}
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() { // metodo de instancia
        this.volume += 2;
    }
    diminuirVolume() { // metodo de instancia
        this.volume -= 2;
    }

    static trocaPilha() { // metodo estatico
        console.log('ok, vou trocar')
    }
}

const controle1 = new ControleRemoto('LG'); // instancia = cria novo objeto
controle1.aumentarVolume(); // metodo de instancia
ControleRemoto.trocaPilha();
console.log(controle1);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    static falar() {
        console.log(this); // dentro de método estático: this === Pessoa
    }
}
Pessoa.falar();

