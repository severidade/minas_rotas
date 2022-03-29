$(document).ready(function(){

	/* mostra os botoes
	  $("section#galeria").hover(function(){
	  	$("section#buttons").fadeIn();
	  }, function(){
		$("section#buttons").fadeOut();
	  });*/

	  varliWidth = $("#galeria ol li").outerWidth();
	 
	 //proximo
	  $(".next").click(function(e){
	  	e.preventDefault();
	  	
	  	$("#galeria ol").css({'width':'99999%'}).animate({left:-varliWidth}, function(){
	  		$("#galeria ol li.slider_item").last().after($("#galeria ol li.slider_item").first());
	  		$(this).css({'left':'0', 'width': varliWidth});  
	  	});
	  });



	  //voltar   
	  $(".prev").click(function(e){
		e.preventDefault();

	  /*$("section#galeria ul").css({'width': '99999%', 'margin-left': -varliWidth});*/

		$("#galeria ol li.slider_item").first().before($('#galeria ol li.slider_item').last());

		$("#galeria ol").css({'width': '99999%', 'margin-left': -varliWidth}).animate({left:varliWidth}, function(){
			$(this).css({'left': '0', 'width': varliWidth, 'margin-left': '0'});
		});


	});




});

