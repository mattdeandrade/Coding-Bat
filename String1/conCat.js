/**Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

Examples

conCat('abc', 'cat') → abcat
conCat('dog', 'cat') → dogcat
conCat('abc', '') → abc */

function conCat(a, b) {
  let bCopy = "";
  if (a.charAt(a.length - 1) === b.charAt(0)) bCopy = b.slice(1, b.length);
  else bCopy = b;

  return a + bCopy;
}

console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));
