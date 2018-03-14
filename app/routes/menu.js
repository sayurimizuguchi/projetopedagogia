module.exports = function(application){
    application.get('/menu', function(req, res){
		console.log('caiu no controller menu');
		application.app.controllers.menu.acessoMenu(application, req, res);
    });
    
    application.get('/chat', function(req, res){
		application.app.controllers.menu.chatAcesso(application, req, res);
    });
    
    application.get('/ajuda', function(req, res){
		application.app.controllers.menu.ajudaAcesso(application, req, res);
    });
    
    application.get('/comoJogar', function(req, res){
		application.app.controllers.menu.auxilioJogar(application, req, res);
    });
    
    application.get('/creditos', function(req, res){
		application.app.controllers.menu.acessoCreditos(application, req, res);
    });
}