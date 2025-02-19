/** Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.*/

function inOrderEqual(a, b, c, equalOk) {
  if (equalOk) {
    if (a <= b && b <= c) return true;
    else return false;
  } else if (!equalOk) {
  }
  if (a < b && b < c) return true;
  else return false;
}

console.log(inOrderEqual(2, 5, 11, false));
console.log(inOrderEqual(5, 7, 6, false));
console.log(inOrderEqual(5, 5, 7, true));
console.log(inOrderEqual(5, 5, 7, false));
console.log(inOrderEqual(2, 5, 4, false));
console.log(inOrderEqual(3, 4, 3, false));
console.log(inOrderEqual(3, 4, 4, false));
console.log(inOrderEqual(3, 4, 3, true));
console.log(inOrderEqual(3, 4, 4, true));
console.log(inOrderEqual(1, 5, 5, true));
console.log(inOrderEqual(5, 5, 5, true));
console.log(inOrderEqual(2, 2, 1, true));
console.log(inOrderEqual(9, 2, 2, true));
console.log(inOrderEqual(0, 1, 0, true));
