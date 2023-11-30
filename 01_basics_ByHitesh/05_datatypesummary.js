// Video 9:-
// In this code I explained about primitive and non-primitive datatypes
// Primitive datatypes
let age=22
let name_2="Harsh"
let isEligible=true
let temperature=null
let accountId=undefined
console.log(typeof age);
console.log(typeof name_2);
console.log(typeof isEligible);
console.log(typeof temperature);
console.log(typeof accoutId);

// Special primitive data type is Symbol
const schoolId = Symbol('123')
const examId = Symbol('123')
console.log(schoolId === examId); // O/P = false bcz we use Symbol datatype with 
// Basically Symbol datatype providing uniqueness to same value of different variable that's why return type 
// Symbol datatype is different
console.log(typeof schoolId);
console.log(typeof examId);
// Non-Primivite datatypes
// Array,Object,Functions

// Array
const cricketer = ['Virat','Rohit','Gill']
console.log(typeof cricketer);
console.log(cricketer);

const myObj= {
    age:"22",
    name_3:'harsh',
}

console.log(typeof myObj);
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
console.log(myFunction);