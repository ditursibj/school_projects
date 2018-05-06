//Create a function to be called when the link si clicked
function createPopup() {
	'use strict';
	var popup = window.open('popupB.html', 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
	if ( (popup!== null) && !popup.closed) {
		popup.focus();
		return false;
	}
}//End of createPopup() function
window.onload = function() {
	'use strict';
	document.getElementById('link').onclick = createPopup;
}
