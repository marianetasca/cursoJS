// 
// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '');

// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.reduce((ac, val) => ac * Number(val), 0));

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.Valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSquequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    // console.log(novoCpf);
    // console.log(digito1);
    // console.log(digito2);


    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
    // console.log(regressivo, val, regressivo * val);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSquequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

// const cpf = new ValidaCPF('111.111.111-12');
const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.cpfLimpo);
// console.log(cpf.Valida());
// cpf.valida();

if (cpf.Valida()) {
    console.log('cpf valido');
} else {
    console.log('cpf invalido');
}