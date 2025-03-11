/**Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars. */

function changeXY(str) {
  const size = str.length;
  if (size === 1 && str.charAt(0) === "x") return "y";
  if (size === 1 && str.charAt(0) !== "x") return str.charAt(0);
  return changeXY(str.charAt(0)) + changeXY(str.slice(1, size));
}

console.log(changeXY("codex"));
console.log(changeXY("xxhixx"));
console.log(changeXY("xhixhix"));
console.log(changeXY("hiy"));
console.log(changeXY("h"));
console.log(changeXY("x"));
