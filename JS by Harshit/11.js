// undefined , null and BigInt

// undefined = value till right now not defined
let firstName;
console.log(typeof firstName); // O/P = undefined
firstName="Harsh";
console.log(typeof firstName);

// null means null no value
// typeof null == object it is a type of bug by JS developer
let lastNumber = null;
console.log(typeof lastNumber); // O/P = object

// BigInt use for to store a number that range is more than normal INT

// Standard to use BigInt
let myNumber = BigInt(12313131232131432441241);
console.log(myNumber);
// Another way to use BigInt is after a number put n
let sameMyNumber = 12313131232131432441241n;
console.log(typeof sameMyNumber, typeof myNumber);
console.log(Number.MAX_SAFE_INTEGER); // give you a max range of normal number/int

// Finf out power of any number
console.log(2 ** 3); // 2***2 == 2^2