/** Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.*/

function bigDiff(nums) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  return max - min;
}

console.log(bigDiff([10, 3, 5, 6]));
console.log(bigDiff([7, 2, 10, 9]));
console.log(bigDiff([2, 10, 7, 2]));
console.log(bigDiff([2, 10]));
console.log(bigDiff([10, 2]));
console.log(bigDiff([10, 0]));
console.log(bigDiff([2, 3]));
console.log(bigDiff([2, 2]));
console.log(bigDiff([2]));
console.log(bigDiff([5, 1, 6, 1, 9, 9]));
console.log(bigDiff([7, 6, 8, 5]));
console.log(bigDiff([7, 7, 6, 8, 5, 5, 6]));
