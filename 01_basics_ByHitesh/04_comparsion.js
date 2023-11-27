// normal comparison
console.log(1<=2);
console.log(1==1);

// useless comparison means avoid this type of comparison
// in null case comparison to anything is unpredict bcz sometime null convert into NaN and some times 0
console.log(null<0);
console.log(null==0); // O/P is not fixed
console.log(undefined==0); // in this case when you compare anything with undefined it always give false

// double equality (==) and strict equality check (===)
console.log("2"==2);  // in this case js convert "2" -> 2 then compare with 2 so the O/P = true
console.log("2"===2); // in this case js first compare the datatype of both value then compare so the O/P = false