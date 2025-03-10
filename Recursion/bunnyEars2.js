/**We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication). */

function bunnyEars2(bunnies) {
  if (bunnies === 0) return 0;
  if (bunnies % 2 === 1) return 2 + bunnyEars2(bunnies - 1);
  if (bunnies % 2 === 0) return 3 + bunnyEars2(bunnies - 1);
}

console.log(bunnyEars2(0));
console.log(bunnyEars2(1));
console.log(bunnyEars2(2));
console.log(bunnyEars2(3));
console.log(bunnyEars2(4));
console.log(bunnyEars2(5));
console.log(bunnyEars2(6));
console.log(bunnyEars2(10));
