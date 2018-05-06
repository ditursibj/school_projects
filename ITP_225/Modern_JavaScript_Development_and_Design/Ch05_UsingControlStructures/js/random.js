function showNumbers() {
	'use strict';
	var numbers = '';
	//Define the for loop
	for (var i = 0; i <6, i++) {
		numbers += parseInt((Math.random() * 100), 10) + ' ';
	}
	//Display the numbers on the page
	var output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = numbers;
	} else {
		output.textContent = numbers;
}//End fo showNumbers() function
window.onload = showNumbers;