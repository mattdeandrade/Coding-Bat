/**Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2 */

function countHi(str) {
  const size = str.length;
  const count = 0;

  for (let i = 0; i < size - 1; i++) {
    if (str.slice(i, i + 2) === "hi") count++;
  }
  return count;
}

console.log(countHi("abc hi ho"));
console.log(countHi("ABChi hi"));
console.log(countHi("hihi"));
console.log(countHi(""));
