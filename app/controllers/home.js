module.exports.autenticar = function(application, req, res){
    console.log('user: '+ req.body.login);

	req.assert('login','O usuário é obrigatório para realizar login, por favor, digite corretamente os dados.').notEmpty();
	req.assert('senha','A senha é obrigatória para realizar login, por favor, digite corretamente os dados.').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("index", { validacao: erros, dataFor: {}, validLogin: {} });
		return; //faz parar aqui no return caso erros seja true e nao continua na execuçao abaixo
	}
	
	var login  = req.body.login;
    var senha = req.body.senha;
    
    var connection = application.config.dbConnect();
    var autenticarDAO = new application.app.models.querysDAO(connection);

       autenticarDAO.autenticar([login, senha], function(error, result){
           console.log('result'+JSON.stringify(result));
           
           if(Object.keys(result).length === 0) {
             console.log('Usuario e senha invalido');
             res.render('index', { validacao: {}, dataFor: {}, validLogin: 'Usuario e senha invalidos.' });
           } else {
             var data = result[0];
             req.session.user = data;
             res.redirect('/menu');
           }
       });
};

module.exports.index = function(application, req, res){
    res.render("index", { validacao: {}, dataFor: {}, validLogin: {} });
};

module.exports.cadastra = function(application, req, res){
	res.render('cadastro', {validacao: {}, dadosForm: {}, dataFor: {}, validLogin: {}});
};

module.exports.cadastrar = function(application, req, res){

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('login', 'Usuário não pode ser vazio').notEmpty();
	req.assert('serie', 'Série não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio').notEmpty();

	var erros = req.validationErrors();
	
   var dados = req.body;
   var data = {
       nome: dados.nome,
       nota: 0,
       login: dados.login,
       senha: dados.senha,
       score : 0,
    };
    console.log('dados do cadastro: '+JSON.stringify(data));
    var dataCadastro = '';
	if(erros){
		res.render('cadastro', {validacao: erros, dadosForm: dados, dataFor: dataCadastro, validLogin: {} });
		return;
	} else {
         var connection = application.config.dbConnect();
        var cadastroDAO = new application.app.models.querysDAO(connection);
        cadastroDAO.cadastrar(data);
         if (data != undefined){
            dataCadastro = 'Cadastrado com sucesso!';
            res.render("cadastro", { validacao: erros, dataFor: dataCadastro, validLogin: {} });
    		return; //faz parar aqui no return caso erros seja true e nao continua na execuçao abaixo
             } else {
                erros = 'Contate o administrador, infelizmente não conseguimos cadastrar.';
                res.render("cadastro", { validacao: erros, dataFor: {}, validLogin: {} });
        		return; //faz parar aqui no return caso erros seja true e nao continua na execuçao abaixo
             }
	}
};