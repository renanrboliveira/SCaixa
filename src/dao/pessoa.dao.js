require('./../model/pessoa.model');
var DBAccess = require('./db')
function PessoaDao(){
	
	var db = DBAccess.getInstance();
	var model = db.model('Pessoa');
	var Pessoa = model;
	
	this.add = function(pessoa){
		
		var p = new Pessoa();
		p.nome = pessoa.getNome();
		p.idade = pessoa.getIdade();
		db.connect();
		
		p.save(function(err){
			if(!err)
				console.log('Salvo com sucesso!')
		});
		db.disconnect()
	}
	
	this.getById = function(id, callback){
		db.connect();
		model.findById(id, function(err, callback){
			
			if(!err)
				console.log("sei lá . . .");
		});
		db.disconnect();
	}
	
	this.getAll = function(callback){

		db.connect();
		model.find({}, function(err, pessoas ){
 			callback(err,pessoas);
		});
	
		
	}
}

module.exports = PessoaDao;