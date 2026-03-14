import 'core-js/stable';
import 'regenerator-runtime';
import './assets/css/style.css';

import Login from './assets/modules/Login';
import Contato from './assets/modules/Contato';
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.form-contato');
login.init();
cadastro.init();
contato.init();