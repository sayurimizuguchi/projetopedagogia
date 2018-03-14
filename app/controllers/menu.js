module.exports.acessoMenu = function(application, req, res) {
    if(!req.session.user) {
		res.render("error");
	} else {
		res.render('menu');
	}
};

module.exports.acessoCreditos = function(application, req, res) { 
	if(!req.session.user) {
		res.render("error");
	} else {
		res.render('info');
	}
};

module.exports.ajudaAcesso = function(application, req, res) {
    if(!req.session.user) {
		res.render("error");
	} else {
		res.render('help');
	}
};

module.exports.auxilioJogar = function(application, req, res) {
	if(!req.session.user) {
		res.render("error");
	} else {
		res.render('auxilio');
	}
}

module.exports.callRanking = function(application, req, res) {
    if(!req.session.user) {
		res.render("error");
	} else {
		var connection = application.config.dbConnect();
        var querysDAO = new application.app.models.querysDAO(connection);
            querysDAO.listar(function(error, result){
                  if (error) {
                    console.log(error);
                  } else if(!req.session.user) {
                  		res.send("<h1>USUARIO PRECISA FAZER LOGIN</h1>");
                  	} else {
                    		res.render('ranking', { data: result });
                  }
           });
	}
};