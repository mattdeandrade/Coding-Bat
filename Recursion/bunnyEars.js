/** We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).*/

function bunnyEars(bunnies) {
  if (bunnies === 0) return 0;
  if (bunnies === 1) return 2;
  return 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0));
console.log(bunnyEars(1));
console.log(bunnyEars(2));
console.log(bunnyEars(3));
console.log(bunnyEars(12));
console.log(bunnyEars(234));
