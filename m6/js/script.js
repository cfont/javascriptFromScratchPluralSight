var string1 = "The quick brown fox";
var string2 = " and lived happily ever after.";

var concat = string1 + string2

// for regex search it must go between forward slashs
// can use literals like "quick"
// can use [a-z]* meaning any lowercase characters and any number of those characters

var offset = concat.search(/[a-z]*/);

output.innerHTML = offset;
