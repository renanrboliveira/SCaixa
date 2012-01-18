/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pt-BR'] = {
		closeText: 'Fechar',
		prevText: '&#x3c;Anterior',
		nextText: 'Pr&oacute;ximo&#x3e;',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		weekHeader: 'Sm',
		dateFormat: 'dd/m/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});

var availableTags = [
	"XEROX",
	"RECARGA DE CELULAR",
	"IMPRESSÃO",
	"FOTOS",
	"INTERNET",
	"CHIP CLARO",
	"CHIP OI",
	"SORVETE",
	"PICOLE",
	"PEDIDO DA AVON",
	"TRUFA",
	"RECARGA DE CARTUCHO"
];

$(function() {

	$( "#nome" ).autocomplete({
		source: availableTags
	});
	
    $(document).ready(function() {		
		
		//hide div
		$('#list-saida').hide();
		$('#erro-nome').hide();
		$('#form-filter').hide();
		$('#list-relatorio').hide();
		
		
		
		
		
		//Mask value
		$('#valor').money('[###.]###,##');
		
		
		$('#relatorio').click(function(){
			
				$('#list-entrada').hide('slow');
				$('#list-saida').hide('slow');
				
				$('#form-filter').show();
				$('#list-relatorio').show();
				
				//jquery-ui
				$('#datepicker').datepicker($.datepicker.regional['pt-BR']);
		});
		

        $('#add-ent').click(function() {
			
			$('#add-ent-modal').modal();
			
        });

		$('#list-sai').click(function(){
			
			$('#form-filter').hide();
			$('#list-entrada').hide('slow');
			$('#list-saida').show('slow');
			
			
		});
		
		$('#list-ent').click(function(){
			$('#form-filter').hide();
			$('#list-saida').hide('slow');
			$('#list-entrada').show('slow');
		});

		$('#gerar-relatorio').click(function(){
			
				
				$.post("/relatorio", {
					
					date: $('#datepicker').val()
					
				}, function(event){
					$(window.document.location).attr('href',"/");					
					
				});
				
			
		});

		$('#ok-produto').click(function() {
			
			if($('#nome').val() != ""){			
			
				$.post("/new/produto",{
				
					nome: $('#nome').val(),
                	descriminacao: $('#descriminacao').val(),
                	valor: $('#valor').val(),
					data: Date.now,
					tipo: $('select').val()
				
				}, function(event){
				
					$(window.document.location).attr('href',"/");
				
				});		 	
			
				$('#add-ent-modal').hide('slow');

				var tags = document.getElementsByTagName('form');
            	for (var i = 0; i < tags.length; i++) {
             		tags[i].reset();
            	}

			}else{
			
				$('#erro-nome').show();
			}

        });

		$("#pro-cancel").click(function() {
			
	        $("#add-ent-modal").modal().trigger('hide');
			
			var tags = document.getElementsByTagName('form');
            for (var i = 0; i < tags.length; i++) {
             	tags[i].reset();
            }

			$(window.document.location).attr('href',"/");


	    });

    });

});
