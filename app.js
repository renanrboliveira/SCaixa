
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');


var Facade = require('./src/facade/facade');

var app = module.exports = express.createServer();

var PessoaController = require('./src/controller/pessoa.controller');
var ProdutoController = require('./src/controller/produto.controller');

var facade = new Facade();
var pessoaController = new PessoaController();
var produtoController = new ProdutoController();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/show/produto', function(req, res){
	
	res.redirect('/');
	
});

app.get('/show/relatorio', function(req, res){
	
	console.log('> ' + req.param.id);

	produtoController.getAllDate(req.body.date, function(err, docs){
		
		res.render('list_relatorio', {
			locals: {relatorios: docs}
			,layout: false
		});
		
		
	});
	
});

app.get('/relatorio', function(req, res){
	
	produtoController.getAllDate(req.body.date, function(err, docs){
		
		teste = docs; 	
		
	});
	
});

var teste = [];
app.post('/relatorio', function(req, res){
		
	console.log(req.body.date);	

	produtoController.getAllDate(req.body.date, function(err, docs){
		
		teste = docs;
		
	});
	
	
	
});

app.post('/new/produto', function(req, res) {
	
		facade.addProduto(req);

});

app.get('/', function(req, res){
	
	var somaEntrada = 0, somaSaida = 0;
	console.log(teste);
	produtoController.getValorEntrada(function(ent, sai){
		somaEntrada = ent;
		somaSaida = sai;
	});
	
	facade.getProdutoAll(function(err, docs){
		
		res.render('admin',{
			
			title: "SCaixa - Controle Financeiro Diário",

			locals: {
				produtos: docs,
				somaEnt: somaEntrada,
				somaSai: somaSaida,
				relatorios: teste
			}, 

			layout:false
		});	
	});
		
});



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
