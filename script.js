$(document).ready(function() {
  setTimeout(function(){
    $(".powerbutton").addClass("alarm"); 
    $(".secondsbutton").addClass("flashing"); 
    $(".body").addClass("alarming"); 
    $(".screen").addClass("alert"); 
    $(".volbar").addClass("hidden");
    $(".voltext2").addClass("hidden");
    $(".chbar").addClass("hidden");
    $(".chtext2").addClass("hidden");
    $(".chnumber").addClass("hidden");
    $("audio").get(0).play();
  }, 10000);

    $(".powerbutton").click(function() { 
    $(".powerbutton").removeClass("alarm");
    $(".secondsbutton").removeClass("flashing"); 
    $(".body").removeClass("alarming"); 
    $(".screen").removeClass("alert"); 
    $(".volbar").removeClass("hidden");
    $(".voltext2").removeClass("hidden");
    $(".chbar").removeClass("hidden");
    $(".chtext2").removeClass("hidden");
    $(".chnumber").removeClass("hidden");
    $("audio").get(0).pause();
	$("audio").get(0).currentTime = 0;
  });

  setInterval(function(){
    var time = new Date();
    var minutes = time.getMinutes() % 12+1;
    $(".chnumber").text(minutes);
    if (!$(".screen").hasClass("alert")){
    	$(".screen").removeClass().addClass("screen").addClass("g"+minutes);
    }
  },1000);

});