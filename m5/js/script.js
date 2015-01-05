function hypotenuse(){
  var side1 = 3;
  var side2 = 4;

  function squareSide1(){
    return side1 * side1;
  }

  function squareSide2(){
    return side2 * side2;
  }

  return Math.sqrt(squareSide1() + squareSide2());

}

output.innerHTML = hypotenuse();
