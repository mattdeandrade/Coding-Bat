/**Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi */

function withoutX(str) {
  let newStr = str.slice(1, str.length - 1);
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);

  if (firstChar === "x") firstChar = "";
  if (lastChar === "x") lastChar = "";

  return firstChar + newStr + lastChar;
}

console.log(withoutX("xHix"));
console.log(withoutX("xHi"));
console.log(withoutX("Hxix"));
