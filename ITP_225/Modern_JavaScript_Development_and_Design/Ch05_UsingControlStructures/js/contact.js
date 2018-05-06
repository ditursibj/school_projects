function process() {
	'use strict';
	var okay = true;
	var email = document.getElementById('email');
	var comments = document.getElementById('comments');
	//validate the email address
	if (!email || !email.value || (email.value.length < 6) || (email.value.indexOf('@') == -1)) {
		okay = false;
		alert('Please enter a valid email address!');
	}
	//validate the comments
	if (!comments || !comments.value || (comments.value.indexOf('<') != -1)) {
		okay =false;
		alert('Please enter your comments, without any HTML!');
	}
	return okay;
}//End of process function

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = process;
}//End of init() function
window.onload = init;