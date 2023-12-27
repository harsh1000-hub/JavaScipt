// Video 30 Chai aur code = map, filter, reduce

// Filter ========================================

const myNums = [1,2,3,4,5,6,7,8,9,10]
// using arrow function and filter is same as forEach but return things what you want and in forEach it only access the value
const newNums = myNums.filter( (num) => (num%2==0)) 
// without using arrow function
const age = myNums.filter(function (num){
  return num<7
})
console.log(newNums)
console.log(age)

// filter the value on the basis on some operation without using filter rather than use forEach
const studentRoll = []
myNums.forEach(function (num){
  if(num>4){
    studentRoll.push(num)
  }
})
console.log(studentRoll)

// =========================================================

// Map = map something with element in array
const studentID = [5,3,2,6,8]
const evenStudentID = studentID.map( (num) => {
   if(num % 2 === 0) { return num+10; } else { return num; }
})
console.log(evenStudentID)

// =================================================


// Chaining concept = means using map,filter after each other

const bankEmployeeId = [1,2,3,4,5,6,7]
const evenBankEmployeeId = bankEmployeeId.filter((num) => num%2==0).map((num) => num+10)
console.log(evenBankEmployeeId)

// ====================================================

// reduce = In JavaScript, the reduce method is used to iterate over an array and accumulate a single result.

const myList = [1,2,3,4]
const intitalValue = 0 
// using normal callback function
// Here first time when reduce method iterate over the array so have to intialize accumulator with some value that's why accumulator+currentValue,intialValue pass only for first time after that accumulator update there value with rescept to currentValue
const sumUpList = myList.reduce(function (accumulator,currentValue){
   return accumulator+currentValue
},intitalValue)
console.log("Without Arrow function "+sumUpList)
// using arrow function
const intialValue_2=0
const sumUpListArrow = myList.reduce((accumulator,currenValue)=>accumulator+currenValue,intialValue_2)
console.log("Using Arrow function "+sumUpListArrow)


// ==========================================================================

// This is example to understand reduce for let you want to make a functionality for an E-commerce site that to main the shoppingCart price and total the price to pay by the user
const shoppingCart = [
    {
      courseName:"JS Course",
      price:2999
    },{
      courseName:"Python Course",
      price:999
    },{
      courseName:"ML Course",
      price:12999
    },{
      courseName:"Java Course",
      price:4999
    }
  ]
  const priceToPay = shoppingCart.reduce((acc,currentItemPrice)=>acc+currentItemPrice.price,0)
  console.log(priceToPay);