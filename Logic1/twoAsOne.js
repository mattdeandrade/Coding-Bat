/**
 * Given three ints, a b c, return true if it is possible to add two of the ints to get the third.
 */

function twoAsOne(a, b, c) {
  if (a + b === c || a + c === b || b + c === a) return true;
  else return false;
}
