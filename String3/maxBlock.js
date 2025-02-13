/**Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

Examples

maxBlock('hoopla') → 2
maxBlock('abbCCCddBBBxx') → 3
maxBlock('') → 0 */

function maxBlock(str) {
  const size = str.length;
  if (size === 0) return 0;
  let lastCount = 0;
  let currentCount = 1;

  for (let i = 0; i < size; i++) {
    if (lastCount < currentCount) lastCount = currentCount;
    if (str.charAt(i) === str.charAt(i - 1)) currentCount++;
    else if (str.charAt(i) != str.charAt(i - 1)) currentCount = 1;
  }
  if (lastCount < currentCount) lastCount = currentCount;
  return lastCount;
}

console.log("hoopla");
console.log("abbCCCddBBBxx");
console.log("");
console.log("xyz");
console.log("xxyz");
console.log("xyzz");
console.log("abbbcbbbxbbbx");
console.log("XXBBBbbxx");
console.log("XXBBBBbbxx");
console.log("XXBBBbbxxXXXX");
console.log("XX2222BBBbbXX2222");
