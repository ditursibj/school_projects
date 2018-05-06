function reportEvent(e) {
	'use strict';
	//The code below will work in all browsers. It will get references to the event
	//and the target of the event (i.e. the HTML element)
	if (typeof e == 'undefined') e = window.event
	var target = e.target || e.srcElement
	var msg = target.nodeName + ':' + e.type + '\n';
	U.$('output').value += msg;
	//The string in the msg above is the target's nodeName value and the
	//event type, followed by a new line character. The nodeName is the HTML element
}//End of reportEvent() function

function setHandlers() {
	'use strict';
	//The function will be called whenever a form is submitted. It's purpose is to dynamically
	//set the event listeners based upon which checkboxes were selected. No arguments are
	//taken because this function will not make use of the event object.
	var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];
	for (var i = 0, count = events.length; i < count; i++) {
		var checkbox = U.$(events[i]);
		//For each item in the events array, an event listener must be either added or removed.
		//The FOR loop goes through the array, then within the loop, a reference is made to the
		//corresponding checkbox.
		
		if (checkbox.checked) {
			U.addEvent(document, events[i], reportEvent);
		} else {
			U.removeEvent(document, events[i], reportEvent);
		}
		/*
		If the checkbox is checked, then the user wants an event listener for that event. In that case,
		the addEvent() method is called, passing it the document object, the name of the event (from the array)
		and a reference to the reportEvent() function. BEcause the event listener is added to the entire document, any
		element within the document can trigger the event.
		
		If the checkbox is not checked, the removeEvent() method is called, in case an event handler was previously 
		created for that event.
		*/
	}//End of FOR loop
	
	U.$('output').value = '';
	return false;
	
}//End of setHandlers() function

window.onload = function() {
	'use strict';
	U.$('theForm').onsubmit = setHandlers;
}