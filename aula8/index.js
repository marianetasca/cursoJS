const nome = 'Luiz';
const sobrenome = 'Silva';
const idade = 25;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento
imc = peso / (altura*altura);
anoNascimento = 2001;
console.log(nome, sobrenome, 'tem', idade + ', pesa', peso, 'tem', altura, 'e seu imc é de', imc )

//template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} e seu imc é de ${imc} `)

