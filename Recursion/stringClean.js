/**Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza". */

function stringClean(str) {
  const size = str.length;
  if (size === 0) return "";
  if (size === 1) return str;
  if (str.charAt(0) === str.charAt(1)) return stringClean(str.slice(1));
  return str.slice(0, 1) + stringClean(str.slice(1));
}

console.log(stringClean("yyzzza"));
console.log(stringClean("abbbcdd"));
console.log(stringClean("Hello"));
console.log(stringClean("XXabcYY"));
console.log(stringClean("112ab445"));
console.log(stringClean("Hello Bookkeeper"));
