/**Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

Examples

minCat('Hello', 'Hi') → loHi
minCat('Hello', 'java') → ellojava
minCat('java', 'Hello') → javaello */

function minCat(a, b) {
  if (a === "" || b === "") return "";
  if (a.length === b.length) return a + b;
  if (a.length > b.length) return a.slice(-b.length) + b;
  else return a + b.slice(-a.length);
}

console.log(minCat("Hello", "Hi"));
console.log(minCat("Hello", "java"));
console.log(minCat("java", "Hello"));
console.log(minCat("x", "abc"));
console.log(minCat("abc", ""));
