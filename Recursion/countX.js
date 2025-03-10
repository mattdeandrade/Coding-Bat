/**Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string. */

function countX(str) {
  const size = str.length;
  if (size === 1 && str === "x") return 1;
  if (size === 1) return 0;

  return countX(str.charAt(0)) + countX(str.slice(1 - size));
}

console.log(countX("xxhixx"));
console.log(countX("xhixhix"));
console.log(countX("hi"));
console.log(countX("h"));
console.log(countX("x"));
