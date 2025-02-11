/** Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

Examples

mirrorEnds('abXYZba') → ab
mirrorEnds('abca') → a
mirrorEnds('aba') → aba*/

function mirrorEnds(string) {
  const size = string.length;
  let newStr = "";
  for (let i = 0; i < size; i++) {
    if (string.charAt(i) === string.charAt(size - i - 1))
      newStr = newStr + string.charAt(i);
    else break;
  }
  return newStr;
}

console.log(mirrorEnds("abXYZba"));
console.log(mirrorEnds("abca"));
console.log(mirrorEnds("aba"));
console.log(mirrorEnds("abab"));
console.log(mirrorEnds("xxx"));
console.log(mirrorEnds("xxYxx"));
console.log(mirrorEnds("Hi and iH"));
console.log(mirrorEnds("x"));
console.log(mirrorEnds(""));
console.log(mirrorEnds("123and then 321"));
console.log(mirrorEnds("band andab"));
