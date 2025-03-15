/**Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12]. */

function count8(n) {
  if (n % 100 === 88) return count8(Math.floor(n / 10)) + count8(n % 10) + 1;
  if (n === 8) return 1;
  if (n <= 9) return 0;
  return count8(Math.floor(n / 10)) + count8(n % 10);
}

console.log(count8(8));
console.log(count8(818));
console.log(count8(8818));
console.log(count8(8088));
console.log(count8(123));
console.log(count8(81238));
console.log(count8(8234));
console.log(count8(2348));
console.log(count8(23884));
console.log(count8(0));
console.log(count8(1818188));
console.log(count8(1080));
console.log(count8(188));
console.log(count8(88888));
console.log(count8(9898));
console.log(count8(78));
console.log(count8(878));
