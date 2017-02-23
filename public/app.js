(function($){
  $(function(){
    $('#loading').hide();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
     $('select').material_select();
     $('#news-btn').click(function(){
       $('#loading').show(1000);
     });

     $(window).scroll(function(){
       if($(window).width() >=800){
       if ( $(window).scrollTop() >= 320){
         $("#price-card").css({"position": "fixed", "right": "10%", "top": 100, "width": "auto"});
         $("#price-img").css("width", "270px");
       }else{
          $("#price-card").css("position", "static");
          $("#price-img").css("width", "270px");
       }
      }
     })

  }); // end of document ready
})(jQuery); // end of jQuery name space
