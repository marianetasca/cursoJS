const numero = Number(prompt('digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0.5 }<p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>$é Nan ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p>$arredondado para cima ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>$arredondado para baixo ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>$com duas casas decimais ${numero.toFixed(2)}<p>`;