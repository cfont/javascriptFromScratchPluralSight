var scope = "global";
// closure means that the something happens in the scope that it is declared not in the scope that it is invoke. a function will scope its variables at the time it is declared, not at the time it is run. 

function  testScope(){
  var scope = "local";
  function innerFunc() {return scope;}
  return innerFunc;
}

var innerFunc = testScope();
var answer = innerFunc();
output.innerHTML = answer;
