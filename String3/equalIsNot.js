/**Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

Examples

equalIsNot('This is not') → false
equalIsNot('This is notnot') → true
equalIsNot('noisxxnotyynotxisi') → true */

function equalIsNot(str) {
  let isCount = 0;
  let notCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === "is") isCount++;
    if (str.slice(i, i + 3) === "not") notCount++;
  }
  if (isCount === notCount) return true;
  else return false;
}

console.log(equalIsNot("This is not"));
console.log(equalIsNot("This is notnot"));
console.log(equalIsNot("noisxxnotyynotxisi"));
console.log(equalIsNot("noisxxnotyynotxsi"));
console.log(equalIsNot("xxxyyyzzzintint"));
console.log(equalIsNot(""));
console.log(equalIsNot("isisnotnot"));
console.log(equalIsNot("isisnotno7Not"));
console.log(equalIsNot("mis3notpotbotis"));
