/**Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12]. */

function count7(n) {
  if (n === 7) return 1;
  if (n <= 9) return 0;
  return count7(Math.floor(n / 10)) + count7(n % 10);
}

console.log(count7(717));
console.log(count7(7));
console.log(count7(123));
console.log(count7(77));
console.log(count7(7123));
console.log(count7(771237));
console.log(count7(771737));
console.log(count7(47571));
console.log(count7(777777));
console.log(count7(777576197));
console.log(count7(99999));
console.log(count7(99799));
