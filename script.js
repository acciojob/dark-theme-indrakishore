//your code here

function swapTheme() {
	var app = document.getElementById("app");
	var swap = document.getElementById("swap");

	if(app.className == "day") {
		app.className = "night";
	} else {
		app.className = "day";
	}

	if(swap.className == "button_day") {
		swap.className = "button_night";
	} else {
		swap.className = "button_day";
	}
}