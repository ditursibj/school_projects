//This function is used to update the text of an HTML element
//This function takes two arguments: the element's ID and the text message
function setText(elementId, message) {
	'use strict';
	if ( (typeof elementId == 'string') && (typeof message == 'string') ) {
		var output = document.getElementById(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
			
		} else {
			output.innerText = message;
		}
	}
}

function init() {
	'use strict';
	//Create a new Date object
	var today = new Date();
	//Create a custom message
	var message = 'Right now it is ' + today.toLocaleDateString();
	message += ' at ' + today.getHours() + ':' + today.getMinutes();
	//Display the date, hours and minutes to the paragraph int he HTML page
	setText('output', message);
}
window.onload = init;