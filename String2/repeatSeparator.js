/** Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

Examples

repeatSeparator('Word', 'X', 3) → WordXWordXWord
repeatSeparator('This', 'And', 2) → ThisAndThis
repeatSeparator('This', 'And', 1) → This*/

function repeatSeparator(word, sep, count) {
  if (count === 1) return word;
  else return word + sep + repeatSeparator(word, sep, count - 1);
}

console.log(repeatSeparator("Word", "X", 3));
console.log(repeatSeparator("This", "And", 2));
console.log(repeatSeparator("This", "And", 1));
console.log(repeatSeparator("Hi", "-n-", 2));
console.log(repeatSeparator("AAA", "", 1));
