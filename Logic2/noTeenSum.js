/**Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum(). */

function noTeenSum(a, b, c) {
  const aNew = fixTeen(a);
  const bNew = fixTeen(b);
  const cNew = fixTeen(c);
  return aNew + bNew + cNew;
}
function fixTeen(x) {
  if (x === 15 || x === 16) return x;
  if (x >= 13 && x <= 19) return 0;
  return x;
}

console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 1, 15));
console.log(noTeenSum(2, 1, 16));
console.log(noTeenSum(2, 1, 17));
console.log(noTeenSum(17, 1, 2));
console.log(noTeenSum(2, 15, 2));
console.log(noTeenSum(16, 17, 18));
console.log(noTeenSum(17, 18, 19));
console.log(noTeenSum(15, 16, 1));
console.log(noTeenSum(15, 15, 19));
console.log(noTeenSum(15, 19, 16));
console.log(noTeenSum(5, 17, 18));
console.log(noTeenSum(17, 18, 16));
console.log(noTeenSum(17, 19, 18));
