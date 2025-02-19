/** Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.*/

function in1To10(n, outsideMode) {
  if (outsideMode) {
    if (n <= 1 || n >= 10) return true;
    else return false;
  } else {
    if (n >= 1 && n <= 10) return true;
    else return false;
  }
}

console.log(in1To10(5, false));
console.log(in1To10(11, false));
console.log(in1To10(11, true));
console.log(in1To10(10, false));
console.log(in1To10(10, true));
console.log(in1To10(9, false));
console.log(in1To10(9, true));
console.log(in1To10(1, false));
console.log(in1To10(1, true));
console.log(in1To10(0, false));
console.log(in1To10(0, true));
console.log(in1To10(-1, false));
