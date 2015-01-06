var string1 = "The quick brown fox";
var string2 = " and lived happily ever after.";

var concat = string1 + string2

var words = concat.split(" ");

var indexOfBrown = concat.indexOf("brown");
var indexOfAnd = concat.indexOf("and");
var myFox = concat.slice(indexOfBrown,indexOfAnd);

output.innerHTML = myFox;
