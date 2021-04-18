console.clear()
// only change code below this line
var ct = 0;
var time = 60;
var timing;


function startTime() {
	timing = setInterval(deduct, 1000);
}

function dis() {
	document.getElementById("count").disabled = false;
	document.getElementById("start").disabled = true;
}

function count() {
	ct += 1;
}

function deduct() {
	if (time > 0) {
		time--;
		document.getElementById("time").innerHTML = time + " seconds";
	} else {
		clearInterval(timing);
		alert(`Your click count is ${ct}.`);
		time = 60;
		document.getElementById("count").disabled = true;
		document.getElementById("start").disabled = false;
	}
}
