/**Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14". */

function changePi(str) {
  const size = str.length;
  if (size === 4 && str.slice(0, 2) === "pi")
    return changePi(str.slice(0, 2)) + changePi(str.slice(2, 4));
  if (size === 3 && str.slice(0, 2) === "pi") return "3.14" + str.charAt(2);
  if (size === 3 && str.slice(1, 3) === "pi") return str.charAt(0) + "3.14";
  if (size === 3 && str !== "pi") return str.slice(0, 3);
  if (size <= 2 && str === "pi") return "3.14";
  if (size <= 2) return str;

  return changePi(str.slice(0, 3)) + changePi(str.slice(3, size));
}

console.log(changePi("xpix"));
console.log(changePi("pipi"));
console.log(changePi("pip"));
console.log(changePi("pi"));
console.log(changePi("hip"));
console.log(changePi("p"));
console.log(changePi("x"));
console.log(changePi(""));
console.log(changePi("pixx"));
console.log(changePi("xyzzy"));
