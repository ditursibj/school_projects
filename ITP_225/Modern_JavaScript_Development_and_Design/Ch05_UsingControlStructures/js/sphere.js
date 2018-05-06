function calculate() {
   'use strict';
   var volume;
   //get the radius value from user input
   var radius = document.getElementById('radius');
   //retrieve the radius value and use a conditional to make sure it is greater than 0
   if (radius && (radius.value > 0)) {
   //volume is 4/3 * pi * radius^3
   volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
   //set to 4 decimals
   volume = volume.toFixed(4);
   //display to the volume text box
   document.getElementById('volume').value = volume;
   return false;
   } //End if statement
}//End of calculate function

function init() {
   'use strict';
   document.getElementById('theForm').onsubmit = calculate;
}//End of init function
window.onload = init;