/** Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

Examples

mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre*/

function mixString(a, b) {
  const newStr = "";

  let maxSize = a.length;
  if (maxSize < b.length) maxSize = b.length;

  for (let i = 0; i < maxSize; i++) {
    newStr = newStr + a.charAt(i) + b.charAt(i);
  }
  return newStr;
}

console.log(mixString("abc", "xyz"));
console.log(mixString("Hi", "There"));
console.log(mixString("xxxx", "There"));
console.log(mixString("xxx", "X"));
console.log(mixString("2/", "27 around"));
console.log(mixString("", ""));
console.log(mixString("", "xyz"));
console.log(mixString("abc", ""));
