// @ts-nocheck
 try { // qualquer codigo que pode dar erro pode usar isso
    console.log(naoExisto);
 } catch(e) {
    console.log('nao Existo nao existe')
 }

 function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw Error('x e y precisar ser numeros.')
    }
    return x + y;
 }
try {
     console.log(soma(1,'1'));
} catch (error) {
    console.log('alguma coisa amigavel');
}
