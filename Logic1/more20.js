/**
 * Return true if the given non-negative number is 1 or 2 more than a multiple of 20.
 */

function more20(n) {
  if (n % 20 === 1 || n % 20 === 2) return true;
  else return false;
}

console.log(more20(20));
console.log(more20(21));
console.log(more20(22));
console.log(more20(23));
console.log(more20(19));
console.log(more20(18));
