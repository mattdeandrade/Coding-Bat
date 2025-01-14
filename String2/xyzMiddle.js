/**Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false */

function xyzMiddle(str) {
  const median = Math.floor(str.length / 2);
  const parity = str.length % 2;
  if (parity === 1) {
    if (str.slice(median - 1, median + 2) === "xyz") return true;
    else return false;
  }
  if (parity === 0) {
    if (str.slice(median - 1, median + 2) === "xyz") return true;
    if (str.slice(median - 2, median + 1) === "xyz") return true;
  }
  return false;
}

console.log(xyzMiddle("AAxyzBB"));
console.log(xyzMiddle("AxyzBB"));
console.log(xyzMiddle("AxyzBBB"));
console.log(xyzMiddle("xyzxyzxyzBxyzxyz"));
console.log(xyzMiddle("xyzxyzAxyzxyzxyz"));
console.log(xyzMiddle("x"));
console.log(xyzMiddle("xy"));
console.log(xyzMiddle("xyz"));
console.log(xyzMiddle("xyzz"));
