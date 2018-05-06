//Define the limitText() function to  to be called when a keyup event occurs within a specific textarea
function limitText() {
	'use strict';
	var comments = U.$('comments');
	var count = comments.value.length;
	U.$('count').value = count;
	/*
	First, a reference  to the textarea is fetched for later use. Then, another variable is assigned the length of that
	element's value, which is the number of characters in the string. Third, the value of the count text input is
	updated to this number
	*/
	if(count > 100) {
		comments.value = comments.value.slice(0,100);
	}
	/*
	If the number of characters that have been entered is greater than 100, then the form element's value
	needs to be sliced down to the first 100 characters.
	*/
}//End of limitText() function
window.onload = function() {
	'use strict';
	U.addEvent(U.$('comments'), 'keyup', limitText);
	U.addEvent(U.$('comments'), 'change', limitText);
	/*
	The event listener is added to the comments element, on keyup events. If you change the particular
	handler to watch for the keypress or keydown event, you'll see the reported count will be off by one
	because the count won't reflect the keypress that's in progress
	*/
};