//Define the $() function
//This will be used to get references to from elements
function $(id) {
	'use strict';
	if (typeof id != 'undefined') {
		return document.getElementById(id);
	}
}
//Define the setText() function.
//Will be used by the script
function setText (elementId, message) {
	'use strict';
	if ( (typeof elementId == 'string')
	&& (typeof message == 'string') ) {
		var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = numbers;
			
		} else {
			output.innerText = numbers;
		}
	}
}
//Begin defining the sortWords function():
//This function does the work when the form is submitted. Starts by getting a reference to the form
function sortWords(max) {
	'use strict';
	var words = $('words').value;
	//Convert the string to an array
	words = words.split('');
	//The split() function returns an array of pieces from a string
	//The result of the operation is assigned back to words, changing that string into an array
	var sorted = words.map(function(value) {
		return value.toLowerCase();
	}).sort();
	//Send the output to the page
	setText('output', sorted.join(', '));
	return false;
}

function init() {
	'use strict';
	$('theForm').onsubmit = sortWords;
}
window.onload = init;