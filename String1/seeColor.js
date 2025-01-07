/**Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

Examples

seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue */

function seeColor(str) {
  if (str.slice(0, 3) === "red") return "red";
  if (str.slice(0, 4) === "blue") return "blue";
  else return "";
}

console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
