var icone = document.getElementById('canvas');
var ctx = icone.getContext('2d');
  // carré
ctx.fillStyle = "blue";
ctx.fillRect(20,-5,190,190);
  // petite forme
ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(90,80);
// dessiner une courbe
ctx.bezierCurveTo(110,15,130,50,140,80);
ctx.fill();
  // forme 1
ctx.beginPath();
ctx.fillStyle = "silver"
ctx.moveTo(160,80);
ctx.bezierCurveTo(140,50,80,60,70,80);
ctx.fill();
  // forme 2
ctx.beginPath();
ctx.fillStyle = "silver";
ctx.moveTo(70,80);
ctx.bezierCurveTo(100,110,150,100,160,80);
ctx.fill();
