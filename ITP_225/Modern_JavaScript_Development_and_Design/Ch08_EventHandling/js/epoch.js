//Define the updateDuration() function
//This function will be called when the page is first loaded and when the user mouses over some text
function updateDuration() {
	'use strict';
	//This line creates a new date object that represents the current moment
	var now = new Date();
	var message = 'It has been ' + now.getTime();
	message += ' seconds since the epoch. (mouseover to update)';
	U.setText('output', message)
	/*
	The page is updated by calling the U.setText() function, passing it the id value of the element
	to be updated and the message itself. As an added protection, this code could check for the existence of
	a U object and a U.setText() function before attempting to invoke that function.
	*/
}//End of updateDuration() function

window.onload = function() {
	'use strict';
	U.addEvent(U.$('output'), 'mouseover', updateDuration);
	updateDuration();
};

/*
An event listener cannot be added to any page element until the element has been loaded,
so that's best done within a window.onload event handler. The first line of code within the function
invokes the U.addEvent() function to create the event listener on the output element.
*/