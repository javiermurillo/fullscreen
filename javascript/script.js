var img = 0;
function move(number){
  $( "#gallery" ).fadeOut("slow", function(){
    document.getElementById("gallery").style.background = 'url(images/' + Math.abs((img+=number)%4) + '.png)';
    $(this).fadeIn("slow");
  });
}

$(document).keydown(function(e) {
  if ((e.which == 37) || (e.which == 40)){
    move(-1);
  }else if((e.which == 38) || (e.which == 39)){
    move(1);
  }
  e.preventDefault();
});

$("#gallery").on( "swipeleft", function(){move(-1);});
$("#gallery").on( "swiperight", function(){move(1);});
