/**
 * Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
 */

function nearTen(num) {
  if (num % 10 <= 2 || num % 10 >= 8) return true;
  else return false;
}

console.log(nearTen(12));
console.log(nearTen(17));
console.log(nearTen(19));
console.log(nearTen(31));
console.log(nearTen(6));
console.log(nearTen(10));
console.log(nearTen(11));
console.log(nearTen(21));
console.log(nearTen(22));
console.log(nearTen(23));
console.log(nearTen(54));
console.log(nearTen(155));
console.log(nearTen(158));
console.log(nearTen(3));
console.log(nearTen(1));
