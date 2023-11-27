// Nested if else
let winningNumber = 19;
let userGuess = prompt("Guess a number");
// this prompt function open a box in browser and ask a number
// prompt always take input in string
console.log(typeof userGuess); // O/P = string
if(userGuess === 19){
    console.log("You are right");
}
else{
    if(userGuess<19){
        console.log("You are too low");
    }
    else{
        console.log("You are too high");
    }
}
