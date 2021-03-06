//Create a function to be called when the link si clicked
function createPopup(e) {
	'use strict';
	if (typeof e == 'undefined') var e = window.event;
	var target = e.target || e.srcElement;
	var popup = window.open(target.href, 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
	if ( (popup!== null) && !popup.closed) {
		popup.focus();
		return false;
	}
}//End of createPopup() function
window.onload = function() {
	'use strict';
	for (var i = 0, count = document.links.length; i < count; i++) {
		document.links[i].onclick = createPopup;
	}
}
