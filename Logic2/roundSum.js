/** For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().*/

function roundSum(a, b, c) {
  return round10(a) + round10(b) + round10(c);
}

function round10(x) {
  if (x % 10 >= 5) return x - (x % 10) + 10;
  if (x % 10 <= 5) return x - (x % 10);
}

console.log(roundSum(16, 17, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(6, 4, 4));
console.log(roundSum(4, 6, 5));
console.log(roundSum(4, 4, 6));
console.log(roundSum(9, 4, 4));
console.log(roundSum(0, 0, 1));
console.log(roundSum(0, 9, 0));
console.log(roundSum(10, 10, 19));
console.log(roundSum(20, 30, 40));
console.log(roundSum(45, 21, 30));
console.log(roundSum(23, 11, 26));
console.log(roundSum(23, 24, 25));
console.log(roundSum(25, 24, 25));
console.log(roundSum(23, 24, 29));
console.log(roundSum(11, 24, 36));
console.log(roundSum(24, 36, 32));
console.log(roundSum(14, 12, 26));
console.log(roundSum(12, 10, 24));
