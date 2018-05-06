function process() {
	'use strict';
	//Get references to the HTML elements
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var department = document.getElementById('department').value;
	var output = document.getElementById('output');
	//Create a new employee object. It will have four properties: firstName, lastName, department
	var employee = {
		firstName: firstName,
		lastName: lastName,
		department: department,
		hireDate: new Date()
	};
	//Create a message that displays the employee info
	var message = '<h2>Employee Added</h2>Name: ' + employee.lastName + ', ' + employee.firstName + '<br>';
	message += 'Department: ' + employee.department + '<br>'
	message+= 'Hire Date: ' + employee.hireDate.toDateString();
	//display the message to the output DIV
	output.innerHTML = message;
	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = process;
}
window.onload = init;