class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + 'ja ligado')
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + 'ja desligado')
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // precisa chamar o super quando usar o extend
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() { // sobrecrever metodo
        console.log('voce alterou o metodo ligar')
    }
}
const s1 = new Smartphone('samsung', 'preto', 's21');
console.log(s1);

const t1 = new Tablet('ipad', true);
console.log(t1.ligado);