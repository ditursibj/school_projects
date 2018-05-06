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
		/*
		  The getName() method is defined within the object. Will return the object's lastName
		  property, followed by a comma and a space, followed by the objects firstName property
		*/
		getName: function () {
			return this.lastName + ', ' + this.firstName;
		},
		hireDate: new Date()
	};
	//Create a message that displays the employee info
	var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
	message += 'Department: ' + employee.department + '<br>';
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