//your code here

function swapTheme() {
	var app = document.getElementById("app");
	var swap = document.getElementById("swap");

	if(app.class == "day") {
		app.class = "night";
	} else {
		app.class = "day";
	}
}