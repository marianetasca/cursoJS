import validator from 'validator';
export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }
    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });

    }

    validate(e) {
        const el = e.target;
        for (let errorText of el.querySelectorAll('.error-text')) {
        errorText.remove();
    }
        const emailInput = el.querySelector('input[name="email"]'); // procura no <input name="email">
        const passwordInput = el.querySelector('input[name="password"]');

        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            this.criaErro(emailInput, 'Email inválido.')
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.criaErro(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if(!error) el.submit();

    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}