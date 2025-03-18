/**Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping. */

function strCount(str, sub) {
  const strSize = str.length;
  const subSize = sub.length;
  if (strSize < subSize) return 0;

  if (str.slice(0, subSize) === sub)
    return 1 + strCount(str.slice(subSize), sub);
  return strCount(str.slice(1), sub);
}

console.log(strCount("catcowcat", "cat"));
console.log(strCount("catcowcat", "cow"));
console.log(strCount("catcowcat", "dog"));
console.log(strCount("cacatcowcat", "cat"));
console.log(strCount("xyx", "x"));
console.log(strCount("iiiijj", "i"));
console.log(strCount("iiiijj", "ii"));
console.log(strCount("iiiijj", "iii"));
console.log(strCount("iiiijj", "j"));
console.log(strCount("iiiijj", "jj"));
console.log(strCount("aaabababab", "ab"));
console.log(strCount("aaabababab", "aa"));
console.log(strCount("aaabababab", "a"));
console.log(strCount("aaabababab", "b"));
