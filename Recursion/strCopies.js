/**Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative. */

function strCopies(str, sub, n) {
  const subSize = sub.length;
  const strSize = str.length;
  if (strSize === subSize && str === sub) return true;
  if (strSize < subSize) return false;
  if (n === 0) return true;
  if (str.slice(0, subSize) === sub) return strCopies(str.slice(1), sub, n - 1);
  if (str.slice(0, subSize) !== sub) return strCopies(str.slice(1), sub, n);
  return false;
}

console.log(strCopies("catcowcat", "cat", 2));
console.log(strCopies("catcowcat", "cow", 2));
console.log(strCopies("catcowcat", "cow", 1));
console.log(strCopies("iiijjj", "i", 3));
console.log(strCopies("iiijjj", "i", 4));
console.log(strCopies("iiijjj", "ii", 2));
console.log(strCopies("iiijjj", "ii", 3));
console.log(strCopies("iiijjj", "x", 3));
console.log(strCopies("iiijjj", "x", 0));
console.log(strCopies("iiiiij", "iii", 3));
console.log(strCopies("iiiiij", "iii", 4));
console.log(strCopies("ijiiiiij", "iiii", 2));
console.log(strCopies("ijiiiiij", "iiii", 3));
console.log(strCopies("dogcatdogcat", "dog", 2));
