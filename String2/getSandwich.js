/**A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

Examples

getSandwich('breadjambread') → jam
getSandwich('xxbreadjambreadyy') → jam
getSandwich('xxbreadyy') → */

function getSandwich(str) {
  let firstBread = false;
  let firstPointer = -1;
  let secondPointer = -1;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 5) === "bread" && firstBread === true) {
      secondPointer = i;
    }
    if (str.slice(i, i + 5) === "bread" && firstBread === false) {
      firstBread = true;
      firstPointer = i + 5;
    }
  }

  if (secondPointer < 0) return "";

  for (let i = firstPointer; i < secondPointer; i++)
    newStr = newStr + str.charAt(i);
  return newStr;
}

console.log(getSandwich("breadjambread"));
console.log(getSandwich("xxbreadjambreadyy"));
console.log(getSandwich("xxbreadyy"));
console.log(getSandwich("xyz"));
console.log(getSandwich("breadbreaxbread"));
console.log(getSandwich("'breaxbreadybread"));
console.log(getSandwich("abcbreaz"));
console.log(getSandwich(""));
