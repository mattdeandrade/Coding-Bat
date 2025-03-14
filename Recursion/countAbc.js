/** Count recursively the total number of "abc" and "aba" substrings that appear in the given string.*/

function countAbc(str) {
  const size = str.length;
  if (size <= 2) return 0;
  if (str.slice(0, 3) === "aba") return 1 + countAbc(str.slice(2));
  if (str.slice(0, 3) === "abc") return 1 + countAbc(str.slice(3));
  if (str.charAt(2) === "a") return 0 + countAbc(str.slice(2));
  return 0 + countAbc(str.slice(3));
}

console.log(countAbc("abc"));
console.log(countAbc("abcxxabc"));
console.log(countAbc("abaxxaba"));
console.log(countAbc("ababc"));
console.log(countAbc("abxbc"));
console.log(countAbc("aaabc"));
console.log(countAbc("hello"));
console.log(countAbc(""));
console.log(countAbc("ab"));
console.log(countAbc("aba"));
console.log(countAbc("aca"));
console.log(countAbc("aaa"));
