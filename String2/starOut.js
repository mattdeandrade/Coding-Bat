/**Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples

starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → silly */

function starOut(str) {
  const size = str.length;
  let newStr = "";

  for (let i = 0; i < size; i++) {
    if (
      str.charAt(i + 1) != "*" &&
      str.charAt(i - 1) != "*" &&
      str.charAt(i) != "*"
    )
      newStr = newStr + str.charAt(i);
  }
  return newStr;
}

console.log(starOut("ab*cd"));
console.log(starOut("ab**cd"));
console.log(starOut("sm*eilly"));
console.log(starOut("*str*in*gy"));
console.log(starOut("a"));
console.log(starOut("a*"));
console.log(starOut("*a"));
console.log(starOut(""));
