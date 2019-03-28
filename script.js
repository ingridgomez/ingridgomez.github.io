document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({attackRadius: 20, monsterHitRadius: 100, attackDuration:300, jumpHeight: 250, monsterSpeed: 550});
});