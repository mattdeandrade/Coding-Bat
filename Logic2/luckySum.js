/** Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.*/

function luckySum(a, b, c) {
  if (a === 13) return 0;
  if (b === 13) return a;
  if (c === 13) return a + b;
  return a + b + c;
}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 2, 13));
console.log(luckySum(1, 13, 3));
console.log(luckySum(1, 13, 13));
console.log(luckySum(6, 5, 2));
console.log(luckySum(13, 2, 3));
console.log(luckySum(13, 2, 13));
console.log(luckySum(13, 13, 2));
console.log(luckySum(9, 4, 13));
console.log(luckySum(8, 13, 2));
console.log(luckySum(7, 2, 1));
console.log(luckySum(3, 3, 13));
