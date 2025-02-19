/**The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number. */

function love6(a, b) {
  if (a === 6 || b === 6) return true;
  if (a + b === 6 || Math.abs(a - b) === 6) return true;
  return false;
}

console.log(love6(6, 4));
console.log(love6(4, 5));
console.log(love6(1, 5));
console.log(love6(1, 6));
console.log(love6(1, 8));
console.log(love6(1, 7));
console.log(love6(7, 5));
console.log(love6(8, 2));
console.log(love6(6, 6));
console.log(love6(-6, 2));
console.log(love6(-4, -10));
console.log(love6(-7, 1));
console.log(love6(7, -1));
console.log(love6(-6, 12));
console.log(love6(-2, -4));
console.log(love6(7, 1));
console.log(love6(0, 9));
console.log(love6(8, 3));
console.log(love6(3, 3));
console.log(love6(3, 4));
