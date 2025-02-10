/**We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

Examples

gHappy('xxggxx') → true
gHappy('xxgxx') → false
gHappy('xxggyygxx') → false */

function gHappy(str) {
  let happy = true;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "g" &&
      (str.charAt(i - 1) === "g" || str.charAt(i + 1) === "g")
    )
      happy = true;
    else if (
      str.charAt(i) === "g" &&
      str.charAt(i - 1) != "g" &&
      str.charAt(i + 1) != "g"
    )
      happy = false;
  }
  return happy;
}

console.log(gHappy("xxggxx"));
console.log(gHappy("xxgxx"));
console.log(gHappy("xxggyygxx"));
console.log(gHappy("g"));
console.log(gHappy("gg"));
console.log(gHappy(""));
console.log(gHappy("xxgggxyz"));
console.log(gHappy("xxgggxyg"));
console.log(gHappy("xxgggxygg"));
console.log(gHappy("mgm"));
console.log(gHappy("mggm"));
console.log(gHappy("yyygggxyy"));
