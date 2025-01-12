/**Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

Examples

endOther('Hiabc', 'abc') → true
endOther('AbC', 'HiaBc') → true
endOther('abc', 'abXabc') → true */

function endOther(a, b) {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  if (aLower === bLower) return true;

  if (aLower === bLower.slice(-a.length, b.length)) return true;
  else if (bLower === aLower.slice(-b.length, a.length)) return true;
  else return false;
}

console.log(endOther("Hiabc", "abc"));
console.log(endOther("AbC", "HiaBc"));
console.log(endOther("abc", "abXabc"));
console.log(endOther("12", "12"));
console.log(endOther("abcXYZ", "abcXYZ"));
console.log(endOther("ab", "12ab"));
