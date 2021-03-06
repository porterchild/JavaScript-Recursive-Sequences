/*var p = document.createElement('p');
p.textContent = 'Hello, World!!';
var div = document.createElement('div');
div.appendChild(p);
document.body.appendChild(div);
*/

function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	n = parseInt(n);
	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	}
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");

		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	n = parseInt(n);

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p)
	}
	else {
		var left = pellHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");

		var right = pellHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = 2*left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}


function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	n = parseInt(n);

	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 3) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		else if (n===2) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p)
	}
	else {
		var left = tribHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");

		var center = tribHelper(n - 2);
		var clas = center.html.getAttribute("class");
		center.html.setAttribute("class", clas + " fib-center");

		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + center.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(center.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}


var fib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
 	if (fibTree) {
 		node.removeChild(fibTree);
 	}
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}
var pell = function (n, node) {
	var pellTree = node.querySelector('div.fib');
 	if (pellTree) {
 		node.removeChild(pellTree);
 	}
	var tree = pellHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}
var trib = function (n, node) {
	var tribTree = node.querySelector('div.fib');
 	if (tribTree) {
 		node.removeChild(tribTree);
 	}
	var tree = tribHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}

var pellButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	pell(value, form.parentNode);
}

var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Pell(' + me.value + ')';
}
var tribButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	trib(value, form.parentNode);
}

var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Trib(' + me.value + ')';
}


var style = document.createElement('style');
style.textContent =
	"#fib {" +
	"	display: inline-block;" +
	//"	width: 2000px;" +
	//"	white-space: nowrap;" +
	"}" +
	"" +
	".fib {" +
	"	display: inline-block;" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".fib-center {" +
	"	float: center;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	".red box with slider {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	".yellow box with slider{" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,130,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	".blue box with slider {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,130,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

// IIFE = Immediately-invoked function expression
// An anonymous function which we create, invoke, then throw away.
// It exists to meet these aims:
//   0) Avoid clobbering an existing variable named "div" in the global namespace. I don't have
//      another variable called "div" today, but this protects my webpage in the event that I
//      later incorporate other JavaScript programs from elsewhere.
//   1) Collect a few related program statements and keep them together in a single unit.
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
// ( function(color, id) {
// 	var div = document.createElement('div');
// 	div.setAttribute('class', color + ' shadowed stuff-box');
// 	div.setAttribute('id', id);
// 	document.body.appendChild(div);
// }('red', 'fib'));



// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var blueDiv = divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'fib');

//blueDiv();
//yellowDiv();

document.title = "Fib, Pell, and Trib Trees"


//fib(11, document.querySelector('.red'))
//pell(11, document.querySelector('.blue'))
//trib(11, document.querySelector('.yellow'))

var fibLink = "https://oeis.org/A000045"
var pellLink = "https://oeis.org/A000129"
var tribLink = "https://oeis.org/A000073"
function linkAdder(link){
	var a = document.createElement('a');
	a.href = link
	a.innerHTML = 'Link to: ' + link;
	var div = document.createElement('div');
	div.appendChild(a);
	document.body.appendChild(div);
}
linkAdder(fibLink);
linkAdder(pellLink);
linkAdder(tribLink);
