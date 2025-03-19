/**Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit. */

function hasOne(n) {
  let num = n;
  while (num > 0) {
    if (num % 10 === 1) return true;
    num = Math.floor(num / 10);
  }
  return false;
}

console.log(hasOne(10));
console.log(hasOne(22));
console.log(hasOne(220));
console.log(hasOne(212));
console.log(hasOne(1));
console.log(hasOne(9));
console.log(hasOne(211112));
console.log(hasOne(121121));
console.log(hasOne(222222));
console.log(hasOne(56156));
console.log(hasOne(56556));
