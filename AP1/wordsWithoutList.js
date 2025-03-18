/** Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. See wordsWithout() below which is more difficult because it uses arrays.*/

function wordsWithoutList(words, len) {
  const newArray = [];
  for (let i = 0; i < words.length; i++)
    if (words[i].length !== len) newArray.push(words[i]);
  return newArray;
}

console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 1));
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 3));
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 4));
console.log(wordsWithoutList(["xx", "yyy", "x", "yy", "z"], 1));
