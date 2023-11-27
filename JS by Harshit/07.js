// Useful string method
// trim() = Remove space from the string but not removing space on existing string rather than create a new string than remove spaces.
let firstName = "   Harsh   ";
//firstName.trim();
 // above line create a new string than remove spaces.
// that why we need to store the string while using trim() method
let newString = firstName.trim(); 
firstName = firstName.trim();
console.log(newString);
console.log(firstName);

// Note:- String is immutable that's why we need store the new string whenever we use the string method.

// toUpperCase() = convert lowercase string to uppercase
let fullName = "harshvardhan";
fullName = fullName.toUpperCase();
console.log(fullName);

// toLowerCase() = convert uppercase string into lowercase
let animalName = "LION";
animalName = animalName.toLowerCase();
console.log(animalName);

// slice() = extract substring from the string

let lastName = "Vardhan";
let sliceString = lastName.slice(0,3+1); // slice(startIndex,endIndex+1)
// lastName.slice(1) == ardhan
console.log(sliceString);z