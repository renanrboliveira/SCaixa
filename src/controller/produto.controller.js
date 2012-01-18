var ProdutoMapper = require('../mappers/produto.mapper'), 
	Produto = require('../entity/produto'),
	ProdutoDao = require('../dao/produto.dao')
	;

function ProdutoController(){
	
	var mapper = new ProdutoMapper();
	var produtoDao = new ProdutoDao();
	
	
	
	this.add = function(req){
		var p = new Produto();
		var date = new Date();
		
		p.setNome(req.body.nome);
		p.setDescriminacao(req.body.descriminacao);
		p.setValor(req.body.valor.replace(",", "."));
		p.setTipo(req.body.tipo);
		p.setData(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
		mapper.add(p);
						
	}
	
	this.getById = function(id, callback){
		produtoDao.getById(id, function(err, doc){
			console.log(doc);
			callback(err,doc);
		});
	}
	
	this.getAll = function(callback){
		produtoDao.getAll(function(err, docs){
			callback(err,docs);
		});
	}
	
	this.getAllDate = function(dateReq, callback){
		produtoDao.getAllByDate(dateReq, function(err, all){
			callback(err, all);
		})
	}
	
	this.getValorEntrada = function(callback){
		var date = new Date();
		var totalEnt = 0, totalSai = 0;
		this.getAll(function(err, docs){
			docs.forEach(function(t){
				if(t.valor != null & t.tipo == 'entrada' & t.data == date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear())
					totalEnt += t.valor;
				else if(t.valor != null & t.tipo == 'saida' & t.data == date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear())
					totalSai += t.valor;
			});	
			
			callback(totalEnt, totalSai);
		});	
	}
	
	
}

module.exports = ProdutoController;