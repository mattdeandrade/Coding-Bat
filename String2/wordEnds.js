/**Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

Examples

wordEnds('abcXY123XYijk', 'XY') → c13i
wordEnds('XY123XY', 'XY') → 13
wordEnds('XY1XY', 'XY') → 11 */

function wordEnds(str, word) {
  const size = word.length;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1, i + size + 1) === word)
      newStr = newStr + str.charAt(i);
    if (str.slice(i - size, i) === word) newStr = newStr + str.charAt(i);
  }
  return newStr;
}

console.log(wordEnds("abcXY123XYijk", "XY"));
console.log(wordEnds("XY123XY", "XY"));
console.log(wordEnds("XY1XY", "XY"));
console.log(wordEnds("XYXY", "XY"));
console.log(wordEnds("XY", "XY"));
console.log(wordEnds("Hi", "XY"));
console.log(wordEnds("", "XY"));
console.log(wordEnds("abc1xyz1i1j", "1"));
console.log(wordEnds("abc1xyz1", "1"));
console.log(wordEnds("abc1xyz1", "1"));
console.log(wordEnds("abc1xyz1abc", "abc"));
console.log(wordEnds("abc1xyz1abc", "b"));
console.log(wordEnds("abc1abc1abc", "abc"));
