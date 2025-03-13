/**Given a string, compute recursively a new string where identical chars that are adjacent in the original string are separated from each other by a "*"." */

function pairStar(str) {
  const size = str.length;
  if (size < 2) return str;
  if (str.charAt(0) === str.charAt(1))
    return str.charAt(0) + "*" + pairStar(str.slice(1, size));
  if (str.charAt(1) === str.charAt(2))
    return str.charAt(0) + str.charAt(1) + "*" + pairStar(str.slice(2, size));
  return str.slice(0, 2) + pairStar(str.slice(2, size));
}

console.log(pairStar("hello"));
console.log(pairStar("xxyy"));
console.log(pairStar("aaaa"));
console.log(pairStar("aaab"));
console.log(pairStar("aa"));
console.log(pairStar("a"));
console.log(pairStar(""));
console.log(pairStar("noadjacent"));
console.log(pairStar("abba"));
console.log(pairStar("abbba"));
