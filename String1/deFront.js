/**Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

Examples

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay */

function deFront(str) {
  let newStr = str.charAt(0);
  if (str.charAt(0) != "a") newStr = "";
  if (str.charAt(1) === "b") newStr = newStr + str.charAt(1);

  return newStr + str.slice(2);
}

console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));
console.log(deFront("abc"));
console.log(deFront("xby"));
console.log(deFront("bazz"));
console.log(deFront("zzz"));
console.log(deFront("abxyz"));
console.log(deFront("aa"));
console.log(deFront("bb"));
console.log(deFront("ba"));
