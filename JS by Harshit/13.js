// truthy and falsy values
// falsy value are those values in JS which are always false in nature
// falsy values are :- "", null, undefined, 0, false
// truthy value = are true in nature
// truthy values are :- "anystring", except 0 all numbers are true

// falsy value code
let falsyNum = "";
if(falsyNum){
    console.log(falsyNum);
}
else{
    console.log("Hey I am true in Nature");
}

// truthy value code
let truthyValue = "abc";
if(truthyValue){
    console.log(truthyValue);
}
else{
    console.log("Het I am false in nature");
}