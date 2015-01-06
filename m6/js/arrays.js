var empty = [];
// that is a simply defined array

empty[0] = 1;
empty[1] = 2;

//output.innerHTML = empty;

var primes = [1,2,3,5,7,11];
var thirdPrime = primes[2];

//output.innerHTML = thirdPrime;

var myArrayLength = primes.length;
//output.innerHTML = myArrayLength;

function range(max){
  var retVal = [];
  for (var i=0;i<max;i++){
    retVal[i]=i*2;
  }
  return retVal;
}

output.innerHTML = range(5);
