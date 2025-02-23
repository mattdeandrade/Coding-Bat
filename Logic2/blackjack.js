/** Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.*/

function blackjack(a, b) {
  if (a > 21 && b > 21) return 0;
  if (a > 21) return b;
  if (b > 21) return a;
  if (a > b) return a;
  return b;
}

console.log(blackjack(19, 21));
console.log(blackjack(21, 19));
console.log(blackjack(19, 22));
console.log(blackjack(22, 19));
console.log(blackjack(22, 50));
console.log(blackjack(22, 22));
console.log(blackjack(33, 1));
console.log(blackjack(1, 2));
console.log(blackjack(34, 33));
console.log(blackjack(17, 19));
console.log(blackjack(18, 17));
console.log(blackjack(16, 23));
console.log(blackjack(3, 4));
console.log(blackjack(3, 2));
console.log(blackjack(21, 20));
