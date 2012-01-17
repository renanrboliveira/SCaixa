$(function() {

    $(document).ready(function() {		
		
		//hide components
		$('#list-saida').hide();
		$('#erro-nome').hide();
		
		
		$('#valor').money('[###.]###,##');
		
		$('#relatorio').click(function(){
			
				$('#list-entrada').hide('slow');
				$('#list-saida').hides('slow');
		});

        $('#add-ent').click(function() {
			
			$('#add-ent-modal').modal();
			
        });

		$('#list-sai').click(function(){
			
			$('#list-entrada').hide('slow');
			$('#list-saida').show('slow');
			
		});
		
		$('#list-ent').click(function(){
			
			$('#list-saida').hide('slow');
			$('#list-entrada').show('slow');
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
