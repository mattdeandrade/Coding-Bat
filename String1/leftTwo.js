/**Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

Examples

left2('Hello') → lloHe
left2('java') → vaja
left2('Hi') → Hi */

function leftTwo(str) {
  return str.slice(2, str.length) + str.slice(0, 2);
}

console.log(leftTwo("Hello"));
console.log(leftTwo("java"));
console.log(leftTwo("Hi"));
