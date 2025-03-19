/** Given two arrays, A and B, of non-negative int scores. A "special" score is one which is a multiple of 10, such as 40 or 90. Return the sum of largest special score in A and the largest special score in B. To practice decomposition, write a separate helper method which finds the largest special score in an array. Write your helper method after your scoresSpecial() method in the JavaBat text area.*/

function scoresSpecial(a, b) {
  const aMax = largest10(a);
  const bMax = largest10(b);
  return aMax + bMax;
}
function largest10(copy) {
  let max = 0;
  for (let i = 0; i < copy.length; i++)
    if (copy[i] > max && copy[i] % 10 === 0) max = copy[i];
  return max;
}

console.log(scoresSpecial([12, 10, 4], [2, 20, 30]));
console.log(scoresSpecial([20, 10, 4], [2, 20, 10]));
console.log(scoresSpecial([12, 11, 4], [2, 20, 31]));
console.log(scoresSpecial([1, 20, 2, 50], [3, 4, 5]));
console.log(scoresSpecial([3, 4, 5], [1, 50, 2, 20]));
console.log(scoresSpecial([10, 4, 20, 30], [20]));
console.log(scoresSpecial([10, 4, 20, 30], [20]));
console.log(scoresSpecial([10, 4, 20, 30], [3, 20, 99]));
console.log(scoresSpecial([10, 4, 20, 30], [30, 20, 99]));
console.log(scoresSpecial([], [2]));
console.log(scoresSpecial([], [20]));
console.log(scoresSpecial([14, 10, 4], [4, 20, 30]));
