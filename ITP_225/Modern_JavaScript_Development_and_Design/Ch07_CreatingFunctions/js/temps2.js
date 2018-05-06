//Create an anonymous function
(function() {

	//Declare a global array to store the temperatures
	var tempsAndDates = {
		lowTemperatures: [],
		highTemperatures: [],
		dateArray: []
	};
		
	
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
		var lowDate;
		var highDate;
	
		//If lowTemp or highTemp are blank, display an error message
		if ( (isNaN(lowTemp.value)) || (isNaN(highTemp.value)) ){
			output.innerHTML = 'Please enter valid low and high temperatures!'
		} else {
			//Push the user values to the end of each respective array
			tempsAndDates.lowTemperatures.push(lowTemp.value);
			tempsAndDates.highTemperatures.push(highTemp.value);
			message = '<table><tr><th>Date</th><th>Low Temperatures</th><th>High Temperatures</th></tr>';
			//Declare variables that will hold the sum of all array elements
			var lowSum = 0;
			var highSum = 0;
			for (var i = 0, count1 = tempsAndDates.lowTemperatures.length; i < count1; i ++) {	
				/*
				  Format your table to to show Date, Low Temp, High temp in that respective order
				  Use date.toLocaleString() to format the date as MM/DD/YYYY  according to local time
				  Display the array variables in table data cells
				*/
				
				var now = Date.now();
				var interval = 1000 * 60 * 60 *24;
				var ts = now - (i * interval);
				var then = new Date(ts);
				
				message += '<tr><td>' + then.toLocaleDateString() + '</td>';
				message += '<td class="rightAlign">' + tempsAndDates.lowTemperatures[i] + '</td>';
				message += '<td class="rightAlign">' + tempsAndDates.highTemperatures[i] + '</td></tr>';			

				//Get the averages of all temps from each respective array
				lowSum += parseFloat(tempsAndDates.lowTemperatures[i], 10);
				highSum += parseFloat(tempsAndDates.highTemperatures[i], 10);
				var lowAvg = lowSum / tempsAndDates.lowTemperatures.length;
				lowAvg = lowAvg.toFixed(1);
				var highAvg = highSum / tempsAndDates.highTemperatures.length;
				highAvg = highAvg.toFixed(1);

			
			}//End FOR loop
			tempsAndDates.dateArray.push(then.toLocaleDateString());
			
			var lowIndex = 0;
			var value1 = tempsAndDates.lowTemperatures[0];
			for (var j = 1; j < tempsAndDates.lowTemperatures.length; j++) {
				if (tempsAndDates.lowTemperatures[j] < value1) {
					value1 = tempsAndDates.lowTemperatures[i];
					lowIndex = j;
				}
			}
			
			var highIndex = 0;
			var value2 = tempsAndDates.highTemperatures[0];
			for (var k = 1; k < tempsAndDates.highTemperatures.length; k++) {
				if (tempsAndDates.highTemperatures[k] > value2) {
					value2 = tempsAndDates.highTemperatures[k];
					highIndex = k;
				}
			}
			
			//Display the averages row in the table			
			message += '<tr class="avg"><td>Averages</td>';
			message += '<td class="rightAlign">' + lowAvg + '</td>' + '<td class="rightAlign">' + highAvg + '</td></tr>';
			message += '<tr class="avg"><td colspan="3">The lowest temperature of ' + tempsAndDates.lowTemperatures[lowIndex] + ' occurred on ' + tempsAndDates.dateArray[lowIndex] + '</td>';
			message += '<tr class="avg"><td colspan="3">The highest temperature of ' + tempsAndDates.highTemperatures[highIndex] + ' occurred on ' + tempsAndDates.dateArray[highIndex] +'</td>';
			message += '</tr></table>';
			output.innerHTML = message;
			
		}//End initial ELSE
		
		console.log(tempsAndDates.dateArray);
		console.log(tempsAndDates.lowTemperatures);
		console.log(tempsAndDates.highTemperatures);

		return false;
	}//End addTemps() function

	function init() {
		'use strict';
		document.getElementById('theForm').onsubmit = addTemps;
		
	}//End init() function
	
	window.onload = init;

})(); //End anonymous function