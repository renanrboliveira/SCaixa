
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
app.post('/relatorio', function(req, res){
		
	res.render('admin');
	
});

app.post('/new/produto', function(req, res) {
	
	
		facade.addProduto(req);

});



app.get('/new/pessoa', function(req, res){

	//pessoaController.add(req);	

});

app.get('/show/pessoa', function(req, res){
	
	
});

app.get('/teste', function(req, res){
	
	res.render('teste', {locals: {
		facade: facade.getProdutoAll
	}, layout:false});
	
});

app.get('/', function(req, res){
	
	var somaEntrada = 0, somaSaida = 0;
	
	produtoController.getValorEntrada(function(ent, sai){
		somaEntrada = ent;
		somaSaida = sai;
	});
	
	
	facade.getProdutoAll(function(err, docs){
		
		res.render('admin',{

			title: "SCaixa - Controle Financeiro",

			locals: {
				produtos: docs,
				somaEnt: somaEntrada,
				somaSai: somaSaida,
			}, 

			layout:false

		});
		
	});
	

	
});

app.get('/produto/:id', function(req, res){
	facade.getProdutoById(req, function(err, doc){
		console.log(doc.getId);
		res.end(String(doc.getId));
	});
		
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
