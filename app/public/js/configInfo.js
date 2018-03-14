$(document).ready(function() {
  
    $('#btn_voltar').click(function(){
    	window.location.href = '/menu';
    });
});

$(function() {
	'use strict';
	//CACHING
	var li = $('.container').find('li'),
	    dis = $('.display'),
	    findD = dis.find('div');

	    //FUNCTIONS
		function close()
		{
			dis.fadeOut('slow' , function(){
				li.parent().fadeIn('slow');
			});
		}
	//PUT TABS IN ARRAY
	var options = [];
		li.each(function(){
		 	options.push($(this).html()); 
		 });

//------------------------------------------------

	//CLICK AND SHOW
	li.on('click' , function(){
		//FIGURE OUT WHICH ONE DID I CLICK?!
		var num = $(this).index();
		//HIDE OTHER LIs
		$(this).parent().fadeOut('slow', function(){
			dis.fadeIn('slow');
		});		
		//TRANSFER HTML
		var x = $(this).html();
		dis.find('div').html(x);

//------------------------------------------------
		function navigate()
		{
			findD.html(li.eq(num).html());
		}
		//NAVIGATE THE TABS
		dis.find('.navigation').on('click',function(){
			//Decide which btn did we click
			//If Next get the Next LI Html	
			if ($(this).hasClass('prev')) {
				--num;
				if(num < 0)
				{
					num = options.length - 1;
				}
				navigate();
			}
			//If previous get the previous Li Html
			else
			{
				++num;
				if(num > options.length - 1)
				{
					num = 0;
				}
				navigate();
			}
		});

//------------------------------------------------
		
		//CLOSE BUTTON
		dis.find('.close').on('click', close);
	});
});