/**Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

Examples

startWord('hippo', 'hi') → hi
startWord('hippo', 'xip') → hip
startWord('hippo', 'i') → h */

function startWord(str, word) {
  let size = 0;
  if (str.length <= word.length) size = str.length;
  else size = word.length;
  let newStr = str.charAt(0);
  for (let i = 1; i < size; i++) {
    if (str.charAt(i) === word.charAt(i)) newStr = newStr + str.charAt(i);
  }

  return newStr;
}

console.log(startWord("hippo", "hi"));
console.log(startWord("hippo", "xip"));
console.log(startWord("hippo", "i"));
