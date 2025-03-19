/** Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.*/

function wordsWithout(words, target) {
  const newArray = [];
  for (let i = 0; i < words.length; i++)
    if (words[i] !== target) newArray.push(words[i]);
  return newArray;
}

console.log(wordsWithout(["a", "b", "c", "a"], "a"));
console.log(wordsWithout(["a", "b", "c", "a"], "b"));
console.log(wordsWithout(["a", "b", "c", "a"], "c"));
console.log(wordsWithout(["b", "c", "a", "a"], "b"));
console.log(wordsWithout(["xx", "yyy", "x", "yy", "x"], "x"));
console.log(wordsWithout(["xx", "yyy", "x", "yy", "x"], "yy"));
console.log(wordsWithout(["aa", "ab", "ac", "aa"], "aa"));
