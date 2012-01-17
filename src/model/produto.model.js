var mongoose = require('mongoose');
	Schema = mongoose.Schema;
	
var Produto = new Schema({
	nome : String,
	descriminacao : String,
	tipo : String,
	valor: Number,
	data: String
});

mongoose.model('Produto', Produto);

exports.ProdutoSchema = Produto;
exports.Produto  = mongoose.model('Produto');