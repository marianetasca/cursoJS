// import validator from 'validator';
// export default class Contato {
//     constructor(formClass) {
//         this.form = document.querySelector(formClass);
//     }

//     init() {
//         this.events();
//     }
//     events() {
//         if (!this.form) return;
//         this.form.addEventListener('submit', e => {
//             e.preventDefault();
//             this.validate(e);
//         });

//     }

//     validate(e) {
//         const el = e.target;
//         for (let errorText of el.querySelectorAll('.error-text')) {
//             errorText.remove();
//         }
//         const emailInput = el.querySelector('input[name="email"]'); // procura no <input name="email">
//         const nome = el.querySelector('input[name="nome"]'); // procura no <input name="email">

//         let error = false;

//         if (!validator.isEmail(emailInput.value)) {
//             this.criaErro(emailInput, 'Email inválido.')
//             error = true;
//         }

//         if (!nome.value) {
//             this.criaErro(nome, 'campo em branco.')
//             error = true;
//         }

//         if (!error) el.submit();

//     }
//     criaErro(campo, msg) {
//         const div = document.createElement('div');
//         div.innerText = msg;
//         div.classList.add('error-text');
//         campo.insertAdjacentElement('afterend', div)
//     }
// }