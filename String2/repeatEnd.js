/** Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

Examples

repeatEnd('Hello', 3) → llollollo
repeatEnd('Hello', 2) → lolo
repeatEnd('Hello', 1) → o*/

function repeatEnd(str, n) {
  const lastN = str.slice(-n, str.length);
  let newStr = "";

  for (let i = 0; i < n; i++) {
    newStr = newStr + lastN;
  }
  return newStr;
}

console.log(repeatEnd("Hello", 3));
console.log(repeatEnd("Hello", 2));
console.log(repeatEnd("1234", 2));
console.log(repeatEnd("", 0));
console.log(repeatEnd("Hello", 0));
