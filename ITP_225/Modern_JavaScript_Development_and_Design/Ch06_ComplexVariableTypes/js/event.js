function process() {
	'use strict';
	var start = document.getElementById('start');
	var end = document.getElementById('end');
	var output = document.getElementById('output');
	//Empty string for message and interval will be used for 'output'
	var message = '';
	var interval = '';
	//number of milliseconds in a day
	var day = 1000 * 60 * 60 * 24;
	//Create two new Date objects that accept the 'start' and 'end' values from the user as arguments
	var startDate = new Date(start.value);
	var endDate = new Date(end.value);
	//Test the dates entered
	if (startDate.getTime() && endDate.getTime()) {
		//Make sure start date comes first
		if (startDate < endDate) {
			//calculate the interval between the two dates (result in milliseconds
			var diff = endDate - startDate;
			//Is it just a 1 day difference?
			if (diff <= day) {
				interval = '1 day';
			//If more than 1 day....
			} else {
				interval = Math.round(diff/day) + ' days';
			}
			message = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
			message += ' and ending on ' + endDate.toLocaleDateString();
			message += ', which is a period of ' + interval + '.';		
		} else {
			message = 'The start date must come before the end date!';
		}
		
		} else {
			message = 'Please enter a valid start and end dates in the format MM/DD/YYYY.';
		}
		
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
	
	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = process;
}
window.onload = init;