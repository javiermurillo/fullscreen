var img = 0;
function move(number){
  $( "#gallery" ).fadeOut("slow", function(){
    $("#step").fadeOut("fast");
    document.getElementById("gallery").style.background = 'url(images/' + Math.abs((img+=number)%6) + '.jpg)';
    $(this).fadeIn("slow");
  });
}

$(document).keydown(function(e) {
  if ((e.which == 37) || (e.which == 40) || (e.which == 72) || (e.which == 74)){
    move(-1);
  }else if((e.which == 38) || (e.which == 39) || (e.which == 75) || (e.which == 76)){
    move(1);
  }
  e.preventDefault();
});

$("#gallery").on( "swipeleft", function(){move(-1);});
$("#gallery").on( "swiperight", function(){move(1);});

