var string1 = "The quick brown fox";
var string2 = " and lived happily ever after.";

var concat = string1 + string2

// for regex search it must go between forward slashs
// can use literals like "quick"
// can use [a-z]* meaning any lowercase characters and any number of those characters
// {5} means i'm looking for 5 of those characters
// \b means i want that search in a word boundry

var myString = "my zip is 01720-1234 what is yours?";

var offset = myString.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);

output.innerHTML = offset;

//regexbuddy is an app for windows that helps build these
//regexlib.com is a web app
