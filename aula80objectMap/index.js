const pessoas = [
    { id:1, nome:'maria' },
    { id:2, nome:'luiz' },
    { id:3, nome:'marcela' },
];
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
};
console.log(novasPessoas);