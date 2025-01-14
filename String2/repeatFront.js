/**Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

Examples

repeatFront('Chocolate', 4) → ChocChoChC
repeatFront('Chocolate', 3) → ChoChC
repeatFront('Ice Cream', 2) → IcI */

function repeatFront(str, n) {
  if (n === 1) return str.charAt(0);
  else return str.slice(0, n) + repeatFront(str, n - 1);
}

console.log(repeatFront("Chocolate", 4));
console.log(repeatFront("Chocolate", 3));
console.log(repeatFront("Ice Cream", 2));
console.log(repeatFront("Ice Cream", 1));
