/** Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.*/

function old35(n) {
  if (n < 0) return false;
  if (n % 15 != 0 && (n % 3 === 0 || n % 5 === 0)) return true;
  return false;
}

console.log(old35(3));
console.log(old35(10));
console.log(old35(15));
console.log(old35(0));
console.log(old35(-3));
console.log(old35(9));
console.log(old35(45));
