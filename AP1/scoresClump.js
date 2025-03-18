/** Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.*/

function scoresClump(scores) {
  const size = scores.length;
  for (let i = 1; i < size - 1; i++)
    if (
      scores[i] - scores[i - 1] <= 2 &&
      scores[i + 1] - scores[i] <= 2 &&
      scores[i + 1] - scores[i - 1] <= 2
    )
      return true;
  return false;
}

console.log(scoresClump([3, 4, 5]));
console.log(scoresClump([3, 4, 6]));
console.log(scoresClump([1, 3, 5, 5]));
console.log(scoresClump([2, 4, 5, 6]));
console.log(scoresClump([2, 4, 5, 7]));
console.log(scoresClump([2, 4, 4, 7]));
console.log(scoresClump([3, 3, 6, 7, 9]));
console.log(scoresClump([3, 3, 7, 7, 9]));
console.log(scoresClump([4, 5, 8]));
