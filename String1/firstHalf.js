/**Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

Examples

firstHalf('WooHoo') → WooHoo
firstHalf('HelloThere') → HelloThere
firstHalf('abcdefg') → abcdefg */

function firstHalf(str) {
  const middle = str.length / 2;
  return str.slice(0, middle);
}

console.log(firstHalf("Woohoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));
