// func1 is a recursive function
function func1(num,exp){
  if (exp === 0){
    return 1;
  }
  return num * func1(num,exp-1);
}

// nonRecursiveFunction is not recursive as the name implies, and, is instead, written as an iterative function as an example that all recursive functions could be written iteratively.
function nonRecursiveFunction(num,exp){
  var retVal = 1;
  for (var i = 0; i < exp; i++){
    retVal *= num;
  }
  return retVal;
}

//var answer = func1(4,3);
var answer = nonRecursiveFunction(2,10);
output.innerHTML = answer;
