var dog = {
  name: "Charlie",
  breed: "Mix",
  weight: 12,
  color: "Brown"
};
// the above is a javascript object. these are mutable/changeable. we can add properties like the below disposition attribute. this is JSON.

var dogWeight = dog.weight;

dog.disposition = "wonderful";

output.innerHTML = dog.disposition;
