/**Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

Examples

stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya */

function stringYak(str) {
  let newStr = "";
  const size = str.length;
  let splitStr = str.split("yak");
  for (let i = 0; i < splitStr.length; i++) {
    newStr = newStr + splitStr[i];
  }

  return newStr;
}

const str = "uyakityak";

console.log(stringYak(str));
