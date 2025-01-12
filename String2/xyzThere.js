/** Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

Examples

xyzThere('abcxyz') → true
xyzThere('abc.xyz') → false
xyzThere('xyz.abc') → true*/

function xyzThere(str) {
  const size = str.length;

  for (let i = 0; i < size; i++) {
    if (str.slice(i, i + 4) === ".xyz") return false;
    if (str.slice(i, i + 3) === "xyz") return true;
  }
  return false;
}

console.log(xyzThere("abcxyz"));
console.log(xyzThere("abc.xyz"));
console.log(xyzThere("xyz.abc"));
console.log(xyzThere("abc.xxyz"));
console.log(xyzThere("1.xyz.xyz2.xyz"));
