// Video 6:-  ---> typecasting
let score = "33"
console.log(typeof score);
console.log(typeof(score));

let convertScore = Number(score)  // type casting in JS
console.log(typeof(convertScore))

let score_1="33abc"
let convertScore_1=Number(score_1)
console.log(typeof(convertScore_1));   // here output is number 
console.log(convertScore_1);  // here output is NaN = (Not a number) means JS not fully converted "33abc" into number

let score_2=""
let convertScore_2=Boolean(score_2)  // O/P is false
console.log(convertScore_2);

let score_3="Harsh"
let convertScore_3=Boolean(score_3)
console.log(convertScore_3)  // O/P is true

// -------------------------------------------------------------->
// Video 7 :- code also include in this file
console.log(3+2+"1");
let str1 = "Harsh" , str2="Vardhan"
let str3 = str1 + str2 // string concatenation
console.log(str3); // HarshVardhan