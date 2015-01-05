var constant = 32; // global variable

function celsiusToFarenheit(temperature) {
  var multiplier = 9; // local variable
  var divisor = 5; //local variable
  // var farenheitTemp = temperature * multiplier / divisor + constant;
  // the above works becasue multiplier and divisor are local inside the function
  // in javascript, the only things that create scope are functions
  var farenheitTemp = temperature * 9/5 + constant;
  return farenheitTemp;
}

// var z = multiplier; would not work because the multiplier variable was defined inside the function and nothing outside the function knows about the variable or its value.

output.innerHTML = celsiusToFarenheit(100);
