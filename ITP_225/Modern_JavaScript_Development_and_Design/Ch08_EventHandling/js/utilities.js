//Create a new object U which will serve as the lone global variable
var U = {
	/*
	Define the $() method. this function takes the id value for the element to be retrieved
	and returns a reference to that element. 
	*/
	
	$: function(id) {
		'use strict';
		if(typeof id == 'string') {
			return document.getElementById(id);
		}//End IF	
	},//End $() function
	
	/*
	Define the setText() method that will take two arguments. the id value of the element to be updated and the message itself.
	Both are validated as strings and the element is fetched using the internal $() function
	*/
	
	setText: function(id, message) {
		'use strict';
		if ( (typeof id == 'string') && (typeof message == 'string')) {
			var output = this.$(id);
			if (!output) return false;
			if (output.textContent !== undefined) {
				output.textContent = message;				
			} else {
				output.innerText = message;
			}//End ELSE
			return true;
		}//End 1st IF
	},//End of setText() function
	
	/*
	Define the addEvent() method. It will take an object as its first argument, not the id value.
	This si necessary in order to add an event listener(s) to the window or document object.
	*/
	
	addEvent: function(obj, type, fn) {
		'use strict';
		if (obj && obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else if (obj && obj.attachEvent) {
			obj.attachEvent('on' + type, fn);
		}
	}, //End of addEvent() function
	
	/*
	Define the removeEvent() method.
	*/
	
	removeEvent: function(obj, type, fn) {
		'use strict';
		if (obj && obj.removeEventListener) {
			obj.removeEventListener(type, fn, false);
		} else if (obj && obj.detachEvent) {
			obj.detachEvent('on' + type, fn);
		}
	}//End of removeEvent() function
}; //End of U declaration