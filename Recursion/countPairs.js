/**We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string. */

function countPairs(str) {
  const size = str.length;
  if (size <= 2) return 0;
  if (str.charAt(0) === str.charAt(2)) return 1 + countPairs(str.slice(1));
  return 0 + countPairs(str.slice(1));
}

console.log(countPairs("axa"));
console.log(countPairs("axax"));
console.log(countPairs("axbx"));
console.log(countPairs("hi"));
console.log(countPairs("hihih"));
console.log(countPairs("ihihhh"));
console.log(countPairs("ihjxhh"));
console.log(countPairs(""));
console.log(countPairs("a"));
console.log(countPairs("aa"));
console.log(countPairs("aaa"));
