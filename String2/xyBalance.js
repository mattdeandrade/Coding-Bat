/**We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

Examples

xyBalance('aaxbby') → true
xyBalance('aaxbb') → false
xyBalance('yaaxbb') → false */

function xyBalance(str) {
  const size = str.length;
  let xCount = false;
  let yBalance = true;

  for (let i = 0; i < size; i++) {
    if (str.charAt(i) === "x") {
      xCount = true;
      yBalance = false;
    }
    if (xCount && str.charAt(i) === "y") {
      xCount = false;
      yBalance = true;
    }
  }
  if (xCount) return false;
  if (yBalance) return true;
}

console.log(xyBalance("aaxbby"));
console.log(xyBalance("aaxbb"));
console.log(xyBalance("yaaxbb"));
console.log(xyBalance("xy"));
console.log(xyBalance("x"));
console.log(xyBalance(""));
console.log(xyBalance("y"));
console.log(xyBalance("yx"));
console.log(xyBalance("yxyxyxyxy"));
console.log(xyBalance("12xabxxydxyxyzz"));
