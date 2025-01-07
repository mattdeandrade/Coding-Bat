/**
 Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

Examples

frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true
 */

function frontAgain(str) {
  if (str.length < 2) return false;
  if (str.slice(0, 2) === str.slice(-2)) return true;
  else return false;
}

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));
console.log(frontAgain("x"));
console.log(frontAgain(""));
