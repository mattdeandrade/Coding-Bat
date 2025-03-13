/**Given a string, compute recursively a new string where all the 'x' chars have been removed. */

function noX(str) {
  const size = str.length;
  if (str === "x") return "";
  if (size <= 1) return str;

  return noX(str.charAt(0)) + noX(str.slice(1));
}

console.log(noX("xaxb"));
console.log(noX("abc"));
console.log(noX("xx"));
console.log(noX(""));
console.log(noX("axxbxx"));
console.log(noX("Hellox"));
