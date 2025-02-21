/**You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0. */

function blueTicket(a, b, c) {
  if (a + b === 10 || a + c === 10 || b + c === 10) return 10;
  if (a + b - 10 === a + c || a + b - 10 === b + c) return 5;
  return 0;
}

console.log(blueTicket(9, 1, 0));
console.log(blueTicket(9, 2, 0));
console.log(blueTicket(6, 1, 4));
console.log(blueTicket(6, 1, 5));
console.log(blueTicket(10, 0, 0));
console.log(blueTicket(15, 0, 5));
console.log(blueTicket(5, 15, 5));
console.log(blueTicket(4, 11, 1));
console.log(blueTicket(13, 2, 3));
console.log(blueTicket(8, 4, 3));
console.log(blueTicket(8, 4, 2));
console.log(blueTicket(8, 4, 1));
