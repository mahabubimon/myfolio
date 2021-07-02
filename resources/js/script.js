$(function(){
    
    var menuTop = $('#menu').offset().top;
    
    $(window).scroll(function(){
        
        var scroll_top = $(window).scrollTop();
        
        if(scroll_top > menuTop){
            
            $('#menu').addClass('menu-fix');
            
        }else{
            
            $('#menu').removeClass('menu-fix');
        }
        
        
        if(scroll_top > 400){
            
            $('.back-top').fadeIn(1000);
        
        }else{
            
            $('.back-top').fadeOut(1000);
        }
        
         
    });
    
    
});