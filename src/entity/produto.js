function Produto(){
	
	var id;
	var nome;
	var descriminacao;
	var tipo;
	var data;
	var valor;
	
	this.setValor = function(valorValue){
		valor = valorValue;
	}
	
	this.getValor = function(){
		return valor;
	}
	
	this.setId = function(idValue){
		id = idValue
	}
	
	this.getId = function(){
		return id;
	}
	
	this.setNome = function(nomeValue){	
		nome = nomeValue;		
	}
	
	this.getNome = function(){
		return nome;
	}
	
	this.setDescriminacao = function(descriminacaoValue){
		descriminacao = descriminacaoValue;		
	}
	
	this.getDescriminacao = function(){
		return descriminacao;
	}
	
	this.setTipo = function(tipoValue){
		tipo = tipoValue;
	}
	
	this.getTipo = function(){
		return tipo;
	}
	
	this.setData = function(dataValue){
		data = dataValue;
	}
	
	this.getData = function(){
		return data;
	}
		
}

module.exports = Produto;