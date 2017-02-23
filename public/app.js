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
       if ( $(window).scrollTop() >= 250){
         $("#price-card").css({"position": "fixed", "right": "20%", "top": 80, "width": "auto"});
         $("iframe").css("width", auto);
       }else{
          $("#price-card").css("position", "static");
       }
     })

  }); // end of document ready
})(jQuery); // end of jQuery name space
