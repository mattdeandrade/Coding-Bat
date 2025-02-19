/** You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).*/

function dateFashion(you, date) {
  if (you <= 2 || date <= 2) return 0;
  if (you >= 8 || date >= 8) return 2;
  return 1;
}

console.log(dateFashion(5, 10));
console.log(dateFashion(5, 2));
console.log(dateFashion(5, 5));
console.log(dateFashion(3, 3));
console.log(dateFashion(10, 2));
console.log(dateFashion(2, 9));
console.log(dateFashion(9, 9));
console.log(dateFashion(10, 5));
console.log(dateFashion(2, 2));
console.log(dateFashion(3, 7));
console.log(dateFashion(2, 7));
console.log(dateFashion(6, 2));
