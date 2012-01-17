var mongoose = require('mongoose');

var Schema  = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
var Pessoa = new Schema({
	
	id : ObjectId,
	nome : String,
	idade : Number
	
});

mongoose.model('Pessoa', Pessoa);

exports.PessoaSchema = Pessoa;
exports.Pessoa  = mongoose.model('Pessoa');