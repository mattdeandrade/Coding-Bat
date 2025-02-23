/**Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large. */

function evenlySpaced(a, b, c) {
  if (
    Math.abs(a - b) === Math.abs(b - c) &&
    Math.abs(a - c) === Math.abs(a - b) * 2
  )
    return true;
  if (
    Math.abs(a - b) === Math.abs(a - c) &&
    Math.abs(b - c) === Math.abs(a - c) * 2
  )
    return true;
  if (
    Math.abs(b - c) === Math.abs(a - c) &&
    Math.abs(a - b) === Math.abs(b - c) * 2
  )
    return true;
  return false;
}

console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 2));
console.log(evenlySpaced(4, 6, 3));
console.log(evenlySpaced(6, 2, 4));
console.log(evenlySpaced(6, 2, 8));
console.log(evenlySpaced(2, 2, 2));
console.log(evenlySpaced(2, 2, 3));
console.log(evenlySpaced(9, 10, 11));
console.log(evenlySpaced(10, 9, 11));
console.log(evenlySpaced(10, 9, 9));
console.log(evenlySpaced(2, 4, 4));
console.log(evenlySpaced(2, 2, 4));
console.log(evenlySpaced(3, 6, 12));
console.log(evenlySpaced(12, 3, 6));
