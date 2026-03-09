const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); // caminho, conteudo, flag para apagar tudo no arquivo caso ele ja exista w apaga, a faz append
};