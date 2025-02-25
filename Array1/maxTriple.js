/** Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

*/

function maxTriple(nums) {
  const size = nums.length;
  let max = nums[0];
  if (max < nums[size - 1]) max = nums[size - 1];
  if (max < nums[size / 2 - 0.5]) max = nums[size / 2 - 0.5];
  return max;
}

console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));
console.log(maxTriple([1, 2, 3, 1, 1]));
console.log(maxTriple([1, 7, 3, 1, 5]));
console.log(maxTriple([5, 1, 3, 7, 1]));
console.log(maxTriple([5, 1, 7, 3, 7, 8, 1]));
console.log(maxTriple([5, 1, 7, 9, 7, 8, 1]));
console.log(maxTriple([5, 1, 7, 3, 7, 8, 9]));
console.log(maxTriple([2, 2, 5, 1, 1]));
