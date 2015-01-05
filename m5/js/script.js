function func1(num,exp){
  if (exp === 0){
    return 1;
  }
  return num * func2(num,exp-1);
}

function func2(num,exp){
  if (exp === 0){
    return 1;
  }
  return num * func3(num,exp-1);
}

function func3(num,exp){
  if (exp === 0){
    return 1;
  }
  return num * func4(num,exp-1);
}

function func4(num,exp){
  if (exp === 0){
    return 1;
  }
  alert("exponent too big!");
}

var answer = func1(4,3);
output.innerHTML = answer;
