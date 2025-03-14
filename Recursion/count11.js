/** Given a string, compute recursively (no loops) the number of "11" substrings in the string. The "11" substrings should not overlap.*/
function count11(str) {
  const size = str.length;
  if (size <= 1) return 0;
  if (str.slice(0, 2) === "11") return 1 + count11(str.slice(2));
  if (str.charAt(1) === "1") return 0 + count11(str.slice(1));
  return 0 + count11(str.slice(2));
}

console.log(count11("11abc11"));
console.log(count11("abc11x11x11"));
console.log(count11("111"));
console.log(count11("1111"));
console.log(count11("1"));
console.log(count11(""));
console.log(count11("hi"));
console.log(count11("11x111x1111"));
console.log(count11("1x111"));
console.log(count11("1Hello1"));
console.log(count11("Hello"));
