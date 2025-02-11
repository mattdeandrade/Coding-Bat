/**We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

Examples

countTriple('abcXXXabc') → 1
countTriple('xxxabyyyycd') → 3
countTriple('a') → 0 */

function countTriple(str) {
  let tripleCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === str.charAt(i + 1) &&
      str.charAt(i) === str.charAt(i + 2)
    )
      tripleCount++;
  }
  return tripleCount;
}

console.log(countTriple("abcXXXabc"));
console.log(countTriple("xxxabyyyycd"));
console.log(countTriple("a"));
console.log(countTriple(""));
console.log(countTriple("XXXabc"));
console.log(countTriple("XXXXabc"));
console.log(countTriple("XXXXXabc"));
console.log(countTriple("222abyyycdXXX"));
console.log(countTriple("abYYYabXXXXXab"));
console.log(countTriple("abYYXabXXYXXab"));
console.log(countTriple("abYYXabXXYXXab"));
console.log(countTriple("122abhhh2"));
