/**This question is modified from parenBit on CodingBat to starBit. Given a string that contains a dash and a star, compute recursively a new string made of only of the dash and star and their contents, so "xyz-abc*123" yields "-abc*". */

function starBit(str) {
  const size = str.length;
  if (size <= 3) return str;
  if (str.charAt(0) === "-" && str.charAt(size - 1) === "*")
    return str.slice(0, size);
  if (str.charAt(0) === "-") return starBit(str.slice(0, size - 1));
  if (str.charAt(size - 1) === "*") return starBit(str.slice(1, size));
  return starBit(str.slice(1, size - 1));
}

console.log(starBit("xyz,-abc*123"));
console.log(starBit("x,-hello*"));
console.log(starBit(",-xy*1"));
console.log(starBit("not really ,-possible*"));
console.log(starBit(",-abc*"));
console.log(starBit(",-abc*xyz"));
console.log(starBit(",-abc*x"));
console.log(starBit(",-x*"));
console.log(starBit(",-)*"));
console.log(starBit("res ,-ipsa* loquitor"));
console.log(starBit("hello,-not really*there"));
console.log(starBit("ab,-ab*ab"));
