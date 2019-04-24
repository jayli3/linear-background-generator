# [Linear Gradient Generator](https://jayli3.github.io/linear-background-generator/ "linear-background-generator")
`Live:` https://jayli3.github.io/linear-background-generator/
This is a linear gradient background generator, pick the color you like, and copy the CSS code!

You can select your own colors or use the `Random` button for the code to generate a random color for you.

4 direction options.

##Code Snippets
Old school JS on top of the HTML and CSS. No 3rd party libraries, just simple DOM manipulations.

[![linear-gradient-bg](https://github.com/jayli3/linear-background-generator/blob/master/README_resources/jpg02.jpg?raw=true "linear-gradient-bg")](https://github.com/jayli3/linear-background-generator/blob/master/README_resources/jpg02.jpg?raw=true "linear-gradient-bg")
#####Javascript:
```javascript
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
```

[![linear-gradient-bg-2](https://github.com/jayli3/linear-background-generator/blob/master/README_resources/jpg01.jpg?raw=true "linear-gradient-bg-2")](https://github.com/jayli3/linear-background-generator/blob/master/README_resources/jpg01.jpg?raw=true "linear-gradient-bg-2")

#####HTML
```html
<!DOCTYPE html>
<html>
<head>
	<title>Background Generator!</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body id="gradient">
	<div>
		<h1>Background Generator!</h1>
		<hr>
		<input type="color" id="color1" name="color1" value="#ffdfaa">
		<input type="color" id="color2" name="color2" value="#98ecd4">
		<div class="direction-div">
			<input id="right" type="radio" name="direction">To right</input>
			<input id="left" type="radio" name="direction">To left</input>
			<input id="top" type="radio" name="direction" checked="checked">To top</input>
			<input id="bottom" type="radio" name="direction">To bottom</input>
		</div>
		<br>
		<h3>CSS Code for this Background:</h3>
		<p id="css"></p>

		<button id="random_btn">Random</button>
	</div>

	<script type="text/javascript" src="script.js"></script>
</body>
</html>
```