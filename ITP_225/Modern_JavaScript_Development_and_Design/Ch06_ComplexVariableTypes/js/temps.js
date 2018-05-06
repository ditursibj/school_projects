//Declare a global array to store the temperatures
var lowTemperatures = [];
var highTemperatures = [];

function addTemps() {
	'use strict';
	//Declare output variable to display temperature info
	var output = document.getElementById('output');
	//Declare lowTemp and highTemp variables tor retrieve data from form
	var lowTemp = document.getElementById('lowTemp');
	var highTemp = document.getElementById('highTemp');
	//Declare a new date object to retrieve the current date
	var date = new Date();
	var message = '';
	
	//If lowTemp or highTemp are blank, display an error message
	if (lowTemp.value == '' || highTemp.value == '' || lowTemp.value > highTemp.value) {
		alert('Please enter valid low and high temperatures!')
	} else {
		//Push the user values to the end of each respective array
		lowTemperatures.push(lowTemp.value);
		highTemperatures.push(highTemp.value);
		message = '<table><tr><th>Date</th><th>Low Temperatures</th><th>High Temperatures</th></tr>';
		//Declare variables that will hold the sum of all array elements
		var lowSum = 0;
		var highSum = 0;
		for (var i = 0, count1 = lowTemperatures.length; i < count1; i ++) {	
			/*Format your table to to show Date, Low Temp, High temp in that respective order
			  Use date.toLocaleString() to format the date as MM/DD/YYYY  according to local time
			  Display the array variables in table data cells
			*/
			message += '<tr><td>' + date.toLocaleDateString() + '</td>';
			message += '<td>' + lowTemperatures[i] + '</td>';
			message += '<td>' + highTemperatures[i] + '</td></tr>';

			//Get the averages of all temps from each respective array
			lowSum += parseFloat(lowTemperatures[i], 10);
			highSum += parseFloat(highTemperatures[i], 10);
			var lowAvg = lowSum / lowTemperatures.length;
			var highAvg = highSum / highTemperatures.length;
			//Set the date back 24 hours for next time the loop iterates
			date.setHours(date.getHours() - 24);
			
		}
		
		//Display the averages row in the table
		message += '<tr><td>Averages</td>';
		message += '<td>' + lowAvg + '</td>' + '<td>' + highAvg + '</td>';
		message += '</tr></table>';
		output.innerHTML = message;
		
	}
	
	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = addTemps;
}
window.onload = init;