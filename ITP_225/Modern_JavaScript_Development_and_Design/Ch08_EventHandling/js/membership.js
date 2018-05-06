function calculate(e) {
	'use script';
	if (typeof e == 'undefined')e = window.event;
	var cost;
	//get a reference to the first two form elements, rather than their direct value
	var type = U.$('type');
	var years = U.$('years');

	if (e.type == 'submit') {
		U.$('cost').value = 'Please enter valid values';
	}
	//convert years to a number
	if (years && years.value) {
		years = parseInt(years.value, 10);
	}//End if
	//validate all the data
	if (type && type.value && years && (years > 0)) {
		//use a switch function to determine the base cost
		switch (type.value) {
			case 'basic':
				cost = 10.00;
				break;
			case 'premium':
				cost = 15.00;
				break;
			case 'gold':
				cost = 20.00;
				break;
			case 'platinum':
				cost = 25.00;
				break;
		}//End switch
		//Factor in the number of years
		cost *= years
		//Factor in the discount
		if (years > 1) {
			//80% discount
			cost *= .80;
		}
		//Display the total in the form
		U.$('cost').value = '$' + cost.toFixed(2);
		//Show an error if the data was not valid
		} else {
			U.$('cost').value = 'Please enter valid values';
	}//End if from line 12
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return false;
}//End calculate function

/*
function init () {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}//End of init() function
*/

window.onload = function () {
	'use strict';
	U.addEvent(U.$('theForm'), 'submit', calculate);
	U.addEvent(U.$('type'), 'change', calculate);
	U.addEvent(U.$('years'), 'change', calculate);
};