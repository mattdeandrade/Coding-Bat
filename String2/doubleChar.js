/** Given a string, return a string where for every char in the original, there are two chars.

Examples

doubleChar('The') → TThhee
doubleChar('AAbb') → AAAAbbbb
doubleChar('Hi-There') → HHii--TThheerree*/

function doubleChar(str) {
  const newStr = "";
  const size = str.length;

  for (let i = 0; i < size; i++) {
    newStr = newStr + str.charAt(i) + str.charAt(i);
  }
  return newStr;
}

console.log(doubleChar("The"));
console.log(doubleChar("a"));
console.log(doubleChar(""));
