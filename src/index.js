// function divides(num1, num2) {
//     return num1 % num2 === 0
//   }
  
// Convert the above function to arrow function
// const divides = (num1, num2) => {
//   return num1 % num2 === 0;
// }
// Write a function that converts Fahrenheit to Celsius 
  
//Take the °F temperature and subtract 32.
//Multiply this number by 5.
//Divide this number by 9 to obtain your answer in °C.
const convertsFtoC = (F) => {
  return ((F - 32) * 5) / 9;
};
 
console.log(convertsFtoC(100));
  
// Convert the python function below to a javascript function

// def pairs_with_given_sum(numbers, target):
//     total = 0
//     for i in range(len(numbers)-1):
//         for j in range(i+1, len(numbers)):
//             if numbers[i]+numbers[j] == target:
//                 total += 1
//     return total

const pairsWithGivenSum = (numbers, target) => {
  let sum = 0;
  for (let num1 = 0; num1 < numbers.length -1; num1++) {
    for (let num2 = num1 +1; num2 < numbers.length; num2++ ) {
      if (numbers[num1] + numbers[num2] === target) {
        sum += 1;
      }
    }
  }
  return sum;
};

console.log(pairsWithGivenSum([1,2,3,4,5,6], 3));

// Using the setInterval function (described below), register a callback function to be called every second.
// Consider printing some output so that you can see that the callback is running.
// setInterval is very similar to the setTimeout function described in Learn, taking the form
//
// setInterval(callBackFunction, intervalInMs)
//   callBackFunction is a reference to the function to be run periodically
//   intervalInMs is how much time should pass between calls to callBackFunction (in millisecond units)
//
// Check out the MDN documentation for setInterval (and setTimeout) for additional details
  
// add your call here