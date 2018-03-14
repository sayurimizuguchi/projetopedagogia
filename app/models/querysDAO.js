function querysDAO(connection){
	this._connection = connection;
}

querysDAO.prototype.autenticar = function ([login,senha], callback, req, res){
    this._connection.query('select * from aluno where login = ? and senha = ?', [login,senha], callback);
};

querysDAO.prototype.listar = function(callback){
    this._connection.query('select * from aluno order by score desc', callback);
};

querysDAO.prototype.topJogador = function(callback){
    this._connection.query('select * from aluno where score = (select max(score) from aluno)', callback);
};

querysDAO.prototype.inserePontuacao = function([score, idAluno], callback){
    this._connection.query('update aluno set score = ? where idAluno = ?', [score, idAluno], callback);
};

querysDAO.prototype.cadastrar = function(data, callback){
    this._connection.query("insert into aluno set ?", data, callback);
};

module.exports = function(){
	return querysDAO;
};