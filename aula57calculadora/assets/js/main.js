// @ts-nocheck
// @ts-ignore

// factory function cria um objeto
// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),
//         btnClear: document.querySelector('.btn-clear'),

//         inicia() {
//             this.cliqueBotoes();
//             this.precionaEnter();
//         },

//         precionaEnter() {
//             this.display.addEventListener('keyup', e => {
//                 if (e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;
//             try {
//                 conta = eval(conta);
//                 if(!conta) {
//                     alert('conta invalida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//             } catch (e) {
//                 alert('Conta invalida');
//             }
//         },


//         cliqueBotoes() {
//             document.addEventListener('click', (e) => { // arrow function nao deixa que o this mude e leia document em vez de calculadora
//                 const el = e.target;
//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDiplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')) {
//                     this.apagaUm();
//                 }

//                 if(el.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }
//             });
//         },

//         btnParaDiplay(valor) {
//             this.display.value += valor;
//         }



//     };
// }
// const calculadora = criaCalculadora();
// calculadora.inicia();



function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes();
        this.precionaEnter();
    };

    this.precionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => { // arrow function nao deixa que o this mude e leia document em vez de calculadora
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnNumDiplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.btnNumDiplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('conta invalida');
                return;
            }

            this.display.value = conta;

        } catch (e) {
            alert('Conta invalida');
            return;
        }
    }
};
const calculadora = new Calculadora();
calculadora.inicia();