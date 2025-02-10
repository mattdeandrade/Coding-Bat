/**Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

Examples

withoutString('Hello there', 'llo') → He there
withoutString('Hello there', 'e') → Hllo thr
withoutString('Hello there', 'x') → Hello there */

function withoutString(base, remove) {
  let newStr = "";
  const size = remove.length;
  for (let i = 0; i < base.length; i++) {
    if (
      base.slice(i, i + size) === remove ||
      base.slice(i, i + size) === remove.toUpperCase() ||
      base.slice(i, i + size) === remove.toLowerCase()
    )
      i = i + size - 1;
    else newStr = newStr + base.charAt(i);
  }
  return newStr;
}

console.log(withoutString("Hello there", "llo"));
console.log(withoutString("Hello there", "e"));
console.log(withoutString("Hello there", "x"));
console.log(withoutString("This is a FISH", "IS"));
console.log(withoutString("THIS is a FISH", "is"));
console.log(withoutString("abxxxxab", "xx"));
console.log(withoutString("abxxxab", "xx"));
console.log(withoutString("abxxxab", "x"));
console.log(withoutString("xxx", "x"));
console.log(withoutString("xyzzy", "Y"));
console.log(withoutString("", "x"));
console.log(withoutString("abcabc", "b"));
console.log(withoutString("AA22bb", "2"));
console.log(withoutString("1111", "1"));
console.log(withoutString("1111", "11"));
console.log(withoutString("MkjtMkx", "Mk"));
console.log(withoutString("Hi HoHo", "Ho"));
