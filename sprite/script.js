var myCommands= function() {
$(".background").addClass("special");
};

var restoreBackground= function(){
$(".background").removeClass("special");
};


document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({ 
  	titleScreenImageURL: "splashscreen.png",
  	attackRadius: 20,
  	 monsterHitRadius: 100, attackDuration:400,
  	  jumpHeight: 300, 
  	  monsterSpeed: 550, 
  	  onMonsterSpawn: myCommands, 
  	  onMonsterWasHit: restoreBackground,
  	  timeBetweenMonsters: 3000
  	});
});