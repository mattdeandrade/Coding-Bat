/** Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.*/

function scoresIncreasing(scores) {
  const size = scores.length;
  for (let i = 0; i < size - 1; i++)
    if (scores[i + 1] < scores[i]) return false;
  return true;
}

console.log(scoresIncreasing([1, 3, 4]));
console.log(scoresIncreasing([1, 3, 2]));
console.log(scoresIncreasing([1, 1, 4]));
console.log(scoresIncreasing([1, 1, 2, 4, 4, 7]));
console.log(scoresIncreasing([1, 1, 2, 4, 3, 7]));
