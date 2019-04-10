var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("#css");
var body = document.getElementById("gradient");
var delete_btn = document.getElementById("random_btn");
var right = document.getElementById("right");
var left = document.getElementById("left");
var top1 = document.getElementById("top");
var bottom= document.getElementById("bottom");

changeBG();

function checkDirection() {
	if (right.checked === true) {return "to right";}
	else if (left.checked === true) {return "to left";}
	else if (top1.checked === true) {return "to top";}
	else {return "to bottom";}
}

function changeBG(){
	body.style.background = 
	"linear-gradient(" + checkDirection() + ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") fixed";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", changeBG);
color2.addEventListener("input", changeBG);
delete_btn.addEventListener("click", function(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeBG();
});
right.addEventListener("click", changeBG);
left.addEventListener("click", changeBG);
top1.addEventListener("click", changeBG);
bottom.addEventListener("click", changeBG);