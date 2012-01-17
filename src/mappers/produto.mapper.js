var Produto = require('../entity/produto')
var ProdutoDao = require('../DAO/produto.dao')

function ProdutoMapper(){
	
	var dao = new ProdutoDao();
	
	this.produtoToModel = function(prod, callback){
		var m = dao.getModel();
		
		m.nome = prod.getNome();
		m.descriminacao = prod.getDescriminacao();
		m.valor = prod.getValor();
		m.data = prod.getData();
		m.tipo = prod.getTipo();
		
		callback(m);
	}
	
	this.modelToProduto = function(m,callback){
		
		if(m instanceof Array){
			var out = [];
			m.forEach(function(element){
					
					var p = new Produto();
					p.setId(element._id);
					p.setnome(element.nome);
					p.setdescriminacao(element.descrminacao);
					p.setValor(element.valor);
					p.setData(element.data);
					p.setTipo(element.tipo);
					out.push(p);
	
			});
			callback(out);
		}else{
			
			var p = new Produto();
			p.setId(m._id);
			p.setnome(m.nome);
			p.setDescriminacao(m.descriminacao);
			p.setValor(m.valor);
			p.setData(m.data);
			p.setTipo(m.tipo);
			callback(p);
				
			
		}
	}
	
	this.add = function(produto){
		this.produtoToModel(produto, function(m){
			dao.add(m);
		});
	}
	
	this.getById = function(id,callback){
		
	}
	
	this.getAll = function(callback){
		dao.getAll(callback);
	}
	
}

module.exports = ProdutoMapper;