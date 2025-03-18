/**Given an array of scores, compute the int average of the first half and the second half, and return whichever is larger. We'll say that the second half begins at index length/2. The array length will be at least 2. To practice decomposition, write a separate helper method int average(int[] scores, int start, int end) { which computes the average of the elements between indexes start..end. Call your helper method twice to implement scoresAverage(). Write your helper method after your scoresAverage() method in the JavaBat text area. Normally you would compute averages with doubles, but here we use ints so the expected results are exact. */

function scoresAverage(scores) {
  const size = scores.length;
  const firstHalf = average(scores, 0, size / 2);
  const secondHalf = average(scores, size / 2, size);
  if (firstHalf >= secondHalf) return firstHalf;
  if (firstHalf < secondHalf) return secondHalf;
}
function average(scores, start, end) {
  const individuals = end - start;
  let sum = 0;
  for (let i = start; i < end; i++) sum = sum + scores[i];
  return sum / individuals;
}

console.log(scoresAverage([2, 2, 4, 4]));
console.log(scoresAverage([4, 4, 4, 2, 2, 2]));
console.log(scoresAverage([3, 4, 5, 1, 2, 3]));
console.log(scoresAverage([5, 6]));
console.log(scoresAverage([5, 4]));
console.log(scoresAverage([5, 4, 5, 6, 2, 1, 2, 3]));
