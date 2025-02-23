/**We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done. */

function makeChocolate(small, big, goal) {
  if (goal % 5 === 0 && big * 5 >= goal) return 0;

  if (goal > small + big * 5) return -1;

  const remainder = 0;
  if (goal > big * 5) {
    remainder = goal - big * 5;

    if (remainder > small) return -1;

    return remainder;
  }

  let newBig = 0;
  if (goal < big * 5) {
    for (let i = 1; i < big; i++) if (goal - i * 5 > 0) newBig++;

    return goal - 5 * newBig;
  }
}

console.log(makeChocolate(4, 1, 9));
console.log(makeChocolate(4, 1, 10));
console.log(makeChocolate(4, 1, 7));
console.log(makeChocolate(6, 2, 7));
console.log(makeChocolate(4, 1, 5));
console.log(makeChocolate(4, 1, 4));
console.log(makeChocolate(5, 4, 9));
console.log(makeChocolate(9, 3, 18));
console.log(makeChocolate(3, 1, 9));
console.log(makeChocolate(1, 2, 7));
console.log(makeChocolate(1, 2, 6));
console.log(makeChocolate(1, 2, 5));
console.log(makeChocolate(6, 1, 10));
console.log(makeChocolate(6, 1, 11));
console.log(makeChocolate(6, 1, 12));
console.log(makeChocolate(6, 1, 13));
console.log(makeChocolate(6, 2, 10));
console.log(makeChocolate(6, 2, 11));
console.log(makeChocolate(6, 2, 12));
console.log(makeChocolate(60, 100, 550));
console.log(makeChocolate(1000, 1000000, 5000006));
console.log(makeChocolate(7, 1, 12));
console.log(makeChocolate(7, 1, 13));
console.log(makeChocolate(7, 2, 13));
