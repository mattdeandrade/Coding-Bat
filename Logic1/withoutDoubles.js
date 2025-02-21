/** Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.*/

function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles) {
    if (die1 === die2) {
      if (die1 === 6) return 7;
      return die1 + die2 + 1;
    }
  }
  return die1 + die2;
}

console.log(withoutDoubles(2, 3, true));
console.log(withoutDoubles(3, 3, true));
console.log(withoutDoubles(3, 3, false));
console.log(withoutDoubles(2, 3, false));
console.log(withoutDoubles(5, 4, true));
console.log(withoutDoubles(5, 4, false));
console.log(withoutDoubles(5, 5, true));
console.log(withoutDoubles(5, 5, false));
console.log(withoutDoubles(6, 6, true));
console.log(withoutDoubles(6, 6, false));
console.log(withoutDoubles(1, 6, true));
console.log(withoutDoubles(6, 1, true));
