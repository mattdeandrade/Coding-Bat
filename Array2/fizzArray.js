/**Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = []; */

function fizzArray(n) {
  let newArray = [];
  for (let i = 0; i < n; i++) newArray.push(i);
  return newArray;
}
console.log(fizzArray(4));
console.log(fizzArray(1));
console.log(fizzArray(10));
console.log(fizzArray(0));
console.log(fizzArray(2));
console.log(fizzArray(7));
