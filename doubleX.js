/**Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true */

function doubleX(str) {
  const size = str.length;
  if (str.slice(0, 2) == "xx") return true;
  if (str.slice(1, 3) == "xx") return true;
  let firstTwoCharIsXX = false;
  for (let i = 0; i < size; i++) {
    if (str.slice(i, i + 1) === "xx" && !firstCharIsX) return true;
  }
  return false;
}

console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
