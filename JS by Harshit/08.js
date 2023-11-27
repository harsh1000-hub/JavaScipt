// typeof = tell you what type datatype a variable hold
let firstName = "Harsh";
console.log(typeof firstName);

// convert number to string
let age = 22;
age = age+""; // this is a trick if you want to convert a number to string than add empty string after a number
//console.log(typeof age);
// standard method to convert a number to a string
age = String(age);
console.log(typeof age);

// convert string to number
let value = "22";
value = +value; // this is a trick if you want to convert a string to number than add + symbol before number
console.log(typeof value);
// standard method to convert a string to a number
value = Number(value);
console.log(typeof value);