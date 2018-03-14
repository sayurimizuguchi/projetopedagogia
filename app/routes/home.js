module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.home.index(application, req, res);
	});
	
	application.post('/autenticar', function(req, res){
		console.log('caiu no autenticar');
		application.app.controllers.home.autenticar(application, req, res);
	});
	
	application.get('/cadastro', function(req, res){
		console.log('caiu no cadastro');
		application.app.controllers.home.cadastra(application, req, res);
	});
	
	application.post('/cadastrar', function(req, res){
		console.log('caiu no cadastrar');
		application.app.controllers.home.cadastrar(application, req, res);
	});

    application.get('/logout', function(req, res){
		req.session.destroy( function(err){
			res.render("index", { validacao: {}, dataFor: {}, validLogin: {}});
		});
    });
};