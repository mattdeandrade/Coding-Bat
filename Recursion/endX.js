/** Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.*/

function endX(str) {
  const size = str.length;
  if (size === 0) return "";
  if (size === 1 && str !== "x") return str;
  if (str.charAt(0) === "x") return endX(str.slice(1)) + "x";
  return endX(str.charAt(0)) + endX(str.slice(1));
}

console.log(endX("xxre"));
console.log(endX("xxhixx"));
console.log(endX("xhixhix"));
console.log(endX("hiy"));
console.log(endX("h"));
console.log(endX("x"));
console.log(endX("xx"));
console.log(endX());
console.log(endX("bxx"));
console.log(endX("bxax"));
console.log(endX("axaxax"));
console.log(endX("xxhxi"));
