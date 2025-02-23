/**Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number. */

function closeFar(a, b, c) {
  if (Math.abs(a - b) <= 1) {
    if (Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2) return true;
    else return false;
  } else if (Math.abs(a - c) <= 1) {
    if (Math.abs(a - b) >= 2 && Math.abs(c - b) >= 2) return true;
    else return false;
  } else return false;
}

console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));
console.log(closeFar(4, 5, 3));
console.log(closeFar(4, 3, 5));
console.log(closeFar(-1, 10, 0));
console.log(closeFar(0, -1, 10));
console.log(closeFar(10, 10, 8));
console.log(closeFar(10, 8, 9));
console.log(closeFar(8, 9, 10));
console.log(closeFar(8, 9, 7));
console.log(closeFar(8, 6, 9));
