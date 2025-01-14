/**Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length(). */

function prefixAgain(str, n) {
  const prefix = str.slice(0, n);

  for (let i = 1; i < str.length; i++) {
    if (str.slice(i, i + n) === prefix) return true;
  }
  return false;
}

console.log(prefixAgain("abXYabc", 1));
console.log(prefixAgain("abXYabc", 2));
console.log(prefixAgain("Hi12345Hi6789Hi10", 2));
console.log(prefixAgain("ab", 1));
