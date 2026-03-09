// valores primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados 
// ex: apontam para o mesmo local
let a = [1,2,3]
let b = a;

b.pop();
console.log(a, b);

// Referencia (mutavel) - array, object, funtion - passados pode referencia
let c = [1,2,3];
let d = [...c];

c.push(4);
console.log(c,d);