$(document).ready(function(){
  $("#ham-menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });

  $("#item-photo .itembox img").click(function(){
    var img_src = $(this).attr("src");
    $("#photoArea .large-box img").attr("src", img_src);
  });

});