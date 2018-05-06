function calculate() {
	'use strict';
	//Declare variables that will be calculated by user inputs
	var regularHours;
	var overtimeHours
	var regularPay;
	var overtimePay;
	var grossPay;
	var totalTaxes;
	var employeeName;
	var netPay;
	//retrieve user input from form
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var hoursWorked = document.getElementById('hoursWorked').value;
	var hourlyRate = document.getElementById('hourlyRate').value;
	var ficaTaxRate = document.getElementById('ficaTaxRate').value;
	var stateTaxRate = document.getElementById('stateTaxRate').value;
	var federalTaxRate = document.getElementById('federalTaxRate').value;
	//Make sure hoursWorked is not more than 80 or less than 0
	//and that hourlyRate is not more than 100
	if (hoursWorked < 0 || hoursWorked > 80 || hourlyRate < 0 || hourlyRate > 100) {
		alert('Please enter valid hours and a valid pay rate!')
	} else {
	//determine the regularHours and the overtime hours, if applicable with an if statement
		if (hoursWorked <= 40) {
			regularHours = hoursWorked;
			overtimeHours = 0;
			document.getElementById('regularHours').value = regularHours;
			document.getElementById('overtimeHours').value = overtimeHours;
		} else {
			regularHours = 40;
			overtimeHours = hoursWorked - regularHours;
			document.getElementById('regularHours').value = regularHours;
			document.getElementById('overtimeHours').value = overtimeHours;
		}
	}
	//calculate regular pay (regular hours * regular rate)
	regularPay = hourlyRate * regularHours;
	regularPay = regularPay.toFixed(2);
	document.getElementById('regularPay').value = regularPay;
	//calculate overtime pay (overtime hours * time and half)
	overtimePay = (hourlyRate * 1.5) * overtimeHours;
	overtimePay = overtimePay.toFixed(2);
	document.getElementById('overtimePay').value = overtimePay;
	//calculate gross pay
	grossPay = parseFloat(regularPay, 10) + parseFloat(overtimePay, 10);
	grossPay = parseFloat(grossPay.toFixed(2)*1);
	document.getElementById('grossPay').value = parseFloat(grossPay);
	//calculate total taxes (fica + state + federal) * grossPay/100
	totalTax = parseFloat(ficaTaxRate, 10) + parseFloat(stateTaxRate, 10) + parseFloat(federalTaxRate, 10);
	totalTax = (totalTax * grossPay) / 100;
	totalTax = parseFloat(totalTax.toFixed(2)*1);
	document.getElementById('totalTax').value = totalTax;
	//concatenate first and last name
	employeeName = firstName + ' ' + lastName;
	document.getElementById('employeeName').value = employeeName;
	//calculate net pay
	netPay = parseFloat(grossPay, 10) - parseFloat(totalTax, 10);
	netPay = netPay.toFixed(2);
	document.getElementById('netPay').value = netPay;
	return false;	
}// End of calculate function

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}//End of init() function
window.onload = init;