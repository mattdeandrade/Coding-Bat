/**Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

Examples

lastTwo('coding') → codign
lastTwo('cat') → cta
lastTwo('ab') → ba */

function lastTwo(str) {
  const size = str.length;
  return str.slice(0, size - 2) + str.charAt(size - 1) + str.charAt(size - 2);
}

console.log(lastTwo("coding"));
console.log(lastTwo("cat"));
console.log(lastTwo("ab"));
