/** Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

Examples

bobThere('abcbob') → true
bobThere('b9b') → true
bobThere('bac') → false*/

function bobThere(str) {
  const size = str.length;

  for (let i = 0; i < size; i++)
    if (str.charAt(i) + str.charAt(i + 2) === "bb") return true;
  return false;
}

console.log(bobThere("abcbob"));
console.log(bobThere("b9b"));
console.log(bobThere("bac"));
console.log(bobThere("bbb"));
