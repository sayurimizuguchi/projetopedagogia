$(document).ready(function() {
  
    $('.accordion a').click(function(){
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
   
    $('#btn_voltar').click(function(){
    	window.location.href = '/menu';
    });
});