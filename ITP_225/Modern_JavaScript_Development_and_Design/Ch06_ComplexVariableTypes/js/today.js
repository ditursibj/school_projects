function init() {
	'use strict';
	//Create a new Date object
	var today = new Date();
	//Create a custom message
	var message = 'Right now it is ' + today.toLocaleDateString();
	message += ' at ' + today.getHours() + ':' + today.getMinutes();
	//Display the date, hours and minutes to the paragraph int he HTML page
	var output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
}
window.onload = init;