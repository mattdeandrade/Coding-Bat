/**
 * Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.
 */

function maxMod5(a, b) {
  if (a === b) return 0;
  if (a % 5 === b % 5) {
    if (a < b) return a;
    if (b < a) return b;
  }
  if (a > b) return a;
  if (b > a) return b;
}

console.log(maxMod5(2, 3));
console.log(maxMod5(6, 2));
console.log(maxMod5(3, 2));
console.log(maxMod5(8, 12));
console.log(maxMod5(7, 12));
console.log(maxMod5(11, 6));
console.log(maxMod5(2, 7));
console.log(maxMod5(7, 7));
console.log(maxMod5(9, 1));
console.log(maxMod5(9, 14));
console.log(maxMod5(1, 2));
