/** Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*".*/

function allStar(str) {
  const size = str.length;
  if (size === 0) return "";
  if (size === 1) return str;
  return allStar(str.charAt(0)) + "*" + allStar(str.slice(1));
}

console.log(allStar("hello"));
console.log(allStar("abc"));
console.log(allStar("ab"));
console.log(allStar("a"));
console.log(allStar(""));
console.log(allStar("3.14"));
console.log(allStar("Chocolate"));
console.log(allStar("1234"));
