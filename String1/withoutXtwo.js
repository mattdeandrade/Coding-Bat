/**Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

Examples

withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi */

function withoutXtwo(str) {
  //case I: first char is X only
  //case II:second char is X only
  //case III:both first and second char is X
  //case IV: neither first or second char is X

  if (str.charAt(0) === "x" && str.charAt(1) != "x")
    return str.slice(1, str.length);
  else if (str.charAt(0) != "x" && str.charAt(1) === "x")
    return str.charAt(0) + str.slice(2, str.length);
  else if (str.slice(0, 2) === "xx") return str.slice(2, str.length);
  else return str;
}

console.log(withoutXtwo("xHi"));
console.log(withoutXtwo("Hxi"));
console.log(withoutXtwo("Hi"));
console.log(withoutXtwo("xxHi"));
