var Pessoa = require('./../entity/pessoa');
var PessoaDao = require('./../dao/pessoa.dao');

function PessoaController(){
	
	var pessoa = new Pessoa();
	var pessoaDao = new PessoaDao();
	
	this.add = function(req){
		console.log(req);
		pessoa.setNome('Renan');
		pessoa.setIdade('23');
		pessoaDao.add(pessoa);
	}
	
	this.getAll = function(callback){
		pessoaDao.getAll(function(err, docs){
			callback(err,docs);
		});
	}
	
	
}

module.exports = PessoaController;