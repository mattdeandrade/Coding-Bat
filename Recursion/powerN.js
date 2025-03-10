/** Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).*/

function powerN(base, n) {
  if (base === 1) return 1;
  if (n === 0) return 1;

  return base * powerN(base, n - 1);
}

console.log(powerN(3, 1));
console.log(powerN(3, 2));
console.log(powerN(3, 3));
console.log(powerN(2, 1));
console.log(powerN(2, 2));
console.log(powerN(2, 3));
console.log(powerN(2, 4));
console.log(powerN(2, 5));
console.log(powerN(10, 1));
console.log(powerN(10, 2));
console.log(powerN(10, 3));
