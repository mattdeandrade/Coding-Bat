/**We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit. */

function dividesSelf(n) {
  const num = n;
  while (num > 0) {
    if (n % 10 === 0) return false;
    if (n % (num % 10) !== 0) return false;
    num = Math.floor(num / 10);
  }
  return true;
}

console.log(dividesSelf(128));
console.log(dividesSelf(12));
console.log(dividesSelf(120));
console.log(dividesSelf(122));
console.log(dividesSelf(13));
console.log(dividesSelf(32));
console.log(dividesSelf(13));
console.log(dividesSelf(32));
console.log(dividesSelf(22));
console.log(dividesSelf(42));
console.log(dividesSelf(212));
console.log(dividesSelf(213));
console.log(dividesSelf(162));
