module.exports = function(application) {
	
	application.get('/questions', function(req, res){
		application.app.controllers.questions.questions(application, req, res);		
	});
	
	application.get('/ranking',function(req, res){
		application.app.controllers.menu.callRanking(application, req, res);
	});
	
	application.post('/pontos', function(req, res){
	  console.log(req.body.number);

 	  var connection = application.config.dbConnect();
	  var querysDAO = new application.app.models.querysDAO(connection);
	  console.log('info do user'+JSON.stringify(req.session.user));
	  
	  var idAluno = req.session.user.idAluno;
	  var scoreInt = req.body.number;
	  var score = parseInt(scoreInt);
	  
	  if(req.body.number){
	        querysDAO.inserePontuacao([score, idAluno], function(error, result) {
	        	console.log(error);
	        	console.log('score do insere: '+score);
	            if (error) {
	              console.log("Não foi possivel cadastrar a pontuação, o erro é "+ error);
	            } else {
	              console.log('pontuação cadastrada');
	            }
	        });
		}
	});
};