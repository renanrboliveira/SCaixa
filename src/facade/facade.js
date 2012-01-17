var ProdutoController = require('../controller/produto.controller');

function Facade(){
	
	var produtoController = new ProdutoController();
	
	this.addProduto = function(req){
		produtoController.add(req);
	}
	
	this.getProdutoById = function(id, callback){
		produtoController.getById(id, callback);
	}
	
	this.getProdutoAll = function(callback){
		produtoController.getAll(function(err, docs){
			callback(err, docs);
		});
	}
	
}

module.exports = Facade;