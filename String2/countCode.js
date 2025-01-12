/** Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

Examples

countCode('aaacodebbb') → 1
countCode('codexxcode') → 2
countCode('cozexxcope') → 2*/

function countCode(str) {
  const size = str.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    if (str.slice(i, i + 2) + str.charAt(i + 3) === "coe") count++;
  }
  return count;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));
console.log(countCode("ode"));
console.log(countCode("c"));
console.log(countCode(""));
