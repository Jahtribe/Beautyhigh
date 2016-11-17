$(document).ready(function(){
  $( ".mobile").click(function() {
    $( ".nav-mobile").toggleClass( "show");
  });
});

$(document).ready(function(){
  $( ".fa-search").click(function() {
    $( ".fa-search").toggleClass( "fa-close ");
  });
});



$(document).ready(function(){

  if (window.innerWidth > 768) {


    $('#bar-2').not(':even').hide();
    $('.fa-search').click(function(){ $('#bar-2').fadeToggle(300); });

    $('#bar-1').not(':even').hide();
    $('.fa-search').click(function(){ $('#bar-1').fadeToggle(300); });

  }

});
