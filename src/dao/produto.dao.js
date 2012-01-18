require ('./../model/produto.model');
var DBAccess = require('./db'); 

function ProdutoDao(){
	
	var db  = DBAccess.getInstance();
	var model = db.model('Produto');
	
	this.add = function(produto){
		
		db.connect();
		produto.save(function(err){		
			if(err)
				throw err;
			db.disconnect();
			
		});
	}
	
	//this.remove
	//this.update
	//this.get
	
	this.getById = function(id, callback){
		db.connect()
		model.findOne({nome: '2'},function(err, doc){
			console.log(doc);
			callback(err, doc);
		});
	}
	
	this.getAll = function(callback){
		
		db.connect();
		model.find({}, function(err, all){
			callback(err, all);
		});
		
	}
	
	this.getAllByDate = function(dateValue, callback){
		db.connect();
		model.find({data:dateValue}, function(err, all){
			callback(err, all);
		});
	}
	
	this.getModel = function(){
		return new model();
		
	}
}

module.exports = ProdutoDao;