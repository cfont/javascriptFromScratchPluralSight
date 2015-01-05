var scope = "global";
// closure means that the something happens in the scope that it is invoked not in the scope that it is declared?

function  testScope(){
  var scope = "local";
  function innerFunc() {return scope;}
  return innerFunc();
}

var answer = testScope();
output.innerHTML = answer;
