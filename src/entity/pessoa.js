function Pessoa(){
	
	var id;
	var nome;
	var idade;
	
	this.setId = function(value){
		id = value;		
	}
	
	this.getId = function(){
		return id;
	}
	
	this.setNome = function(value){
		nome = value;
	}
	
	this.getNome = function(){
		return nome;
	}
	
	this.setIdade = function(value){
		idade = value;
	}
	
	this.getIdade = function(){
		return idade;
	}
	
	
}

module.exports = Pessoa;