var mongoose = require('mongoose');
var host = 'mongodb://localhost/sbcaixa'

var DBAcess = function(){
	
	var instance;
	
	function init(){
		return {
			connect: function(callback){
				if(arguments.length == 1 && arguments[0] == 'function'){
					mongoose.connect(host);
					calback();
				}else{
					mongoose.connect(host);
				}
			},
			
			disconnect: function(){
				mongoose.disconnect();
			},
			
			model: function(model){
				return mongoose.model(model);
			}
		};
	}
	
	return {
		getInstance: function(){
			if(!instance){
				instance = init();
			}
			
			return instance;
		}
	};
	
}();

module.exports = DBAcess;