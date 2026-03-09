exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};
// exports.paginaInicial = (req, res, next) => {
//     console.log('respondendo o cliente');
//     res.render('index');
//     console.log(`'paginaInicial olha oq tem na req.session.nome ${req.session.nome}`);
//     next();
// };

exports.trataPost = (req, res )=> {
    res.send(req.body);
    return;
};