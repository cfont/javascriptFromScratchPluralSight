var ageAsString = prompt("What is your age?", "");
var age = Number(ageAsString);
if ( age < 40 ) {
  alert("Oh you're so young...");
  alert("and 40 is a drag...");
}
else if (age == 40) {
  alert("Hey, you're 40!");
}
else {
  alert("Don't worry, you're young at heart");
}

alert("Thank you");
