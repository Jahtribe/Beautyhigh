<script type="text/javascript">
$(document).ready(function(){
  $( ".mobile").click(function() {
    $( ".nav-mobile").toggleClass( "yes");
  });
});
</script>

<script type="text/javascript">
$(document).ready(function(){
  $( ".fa-search").click(function() {
    $( ".fa-search").toggleClass( "fa-close ");
  });
});
</script>

<script type="text/javascript">
$(document).ready(function(){
  $( ".fa-align-justify").click(function() {
    $( ".fa-align-justify").toggleClass( "fa-close ");
  });
});
</script>

<script type="text/javascript">
$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 2000);
return false;
});
});
</script>
