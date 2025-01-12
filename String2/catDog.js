/**Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples

catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true */

function catDog(str) {
  let catCount = 0;
  let dogCount = 0;
  const size = str.length;

  for (let i = 0; i < size; i++) {
    if (str.slice(i, i + 3) === "cat") catCount++;
    if (str.slice(i, i + 3) === "dog") dogCount++;
  }
  if (catCount === dogCount) return true;
  else return false;
}

console.log(catDog("catdog"));
console.log(catDog("catcat"));
console.log(catDog("lcatlcadodog"));
console.log(catDog(""));
