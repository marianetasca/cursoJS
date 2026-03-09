exports.paginaInicial = (req, res) => {
    // req.flash('info', 'ola mundo!');
    // req.flash('error', 'ogegugrg');
    // req.flash('sucess', 'olfregrgndo!');
        // console.log(req.flash('error'), req.flash('sucess'), req.flash('info'))

    res.render('index');
    return;
};

exports.trataPost = (req, res )=> {
    res.send(req.body);
    return;
};
