// @ts-nocheck
const elementos = [
    {tag: 'p', texto: 'ewgwg'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'section', texto: 'frase3'},
    {tag: 'footer', texto: 'frase4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); //tira essa linha se for usar o innertext

    // tagCriada.innerText = texto;

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}
container.appendChild(div);