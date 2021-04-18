console.clear()
// only change code below this line
var ct = 0;
var time = 60;
var timing;
var round = 1;

function startTime() {
	timing = setInterval(deduct, 1000);
	document.getElementById("round").innerHTML = `Round ${round}.`;
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
		createTable();
		time = 60;
		ct = 0;
		round++;
		document.getElementById("count").disabled = true;
		document.getElementById("start").disabled = false;
	}
}

function createTable() {
	var table = document.getElementById("scores");
	var temp = `
		<tr>
			<td>${round}</td>
			<td>${ct}</td>
		</tr>
	`
	table.innerHTML += temp;
}
