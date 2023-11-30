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
console.log(typeof cricketer); // O/P -> objects
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
console.log(typeof myFunction);  // O/P -> Function 
// But technically in JS typeof myFunction = object function
console.log(myFunction);


// ------------------------------------------------------------------------------------

// Video 10:-
// Stack VS Heap Memory
// Stack = Store all Primitive datatype and make a copy 
// Heap = Store all Non-Primitive datatype/Referrence datatype and use referrence concept

// Stack example
let studentName = "Harsh";
let anotherStudentName = studentName;  // In this only copy of a studentName assign to anotherStudnetName not original referrence
anotherStudentName = "Vaibhav"; // No effect on studentName due to stack memory
console.log(studentName);
console.log(anotherStudentName);

// Heap example
const employeeDetails = {
    name:"Harsh",
    age:"22",
    email:"harsh@google.com"
}

const anotherEmployeeDetails = employeeDetails;
anotherEmployeeDetails.email="vaibhav@google.com" // this line make change in anotherEmployeeDetails as well employeeDetaisl due to assign referrence
console.table([employeeDetails]);
console.table([anotherEmployeeDetails]);