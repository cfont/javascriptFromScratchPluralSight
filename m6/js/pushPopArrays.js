var primes = [1,2,3,5,7,11];

function range(max){
  var retVal = [];
  for (var i=0;i<max;i++){
    retVal.push(i*2);
  }

  return retVal;
}

// using this push method of array is similar to what we did in the arrays.js file
// the pop method doesn't just get the last value but it removes it from the array. don't forget this...

output.innerHTML = range(5);
