/** Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].*/

function sumDigits1(n) {
  if (n <= 9) return n;
  return (n % 10) + sumDigits1(Math.floor(n / 10));
}

console.log(sumDigits1(126));
console.log(sumDigits1(49));
console.log(sumDigits1(12));
console.log(sumDigits1(10));
console.log(sumDigits1(1));
console.log(sumDigits1(0));
console.log(sumDigits1(730));
console.log(sumDigits1(1111));
console.log(sumDigits1(11111));
console.log(sumDigits1(10110));
console.log(sumDigits1(235));
