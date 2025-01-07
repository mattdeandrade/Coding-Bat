/** Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

Examples

without2('HelloHe') → lloHe
without2('HelloHi') → HelloHi
without2('Hi') → */

function withoutTwo(str) {
  if (str.length === 2) return "";
  if (str.length <= 1) return str;
  else if (str.slice(0, 2) === str.slice(-2)) return str.slice(2);
  else return str;
}

console.log(withoutTwo("Hellohe"));
console.log(withoutTwo("Hellohi"));
console.log(withoutTwo("Hi"));
console.log(withoutTwo("Chocolate"));
console.log(withoutTwo("xxx"));
console.log(withoutTwo("xx"));
console.log(withoutTwo("x"));
console.log(withoutTwo(""));
