/**Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more. */

function centeredAverage(nums) {
  let min = nums[0];
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
    sum = sum + nums[i];
  }

  return (sum - min - max) / (nums.length - 2);
}

console.log(centeredAverage([1, 2, 3, 4, 100]));
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7]));
console.log(centeredAverage([-10, -4, -2, -4, -2, 0]));
console.log(centeredAverage([5, 3, 4, 6, 2]));
console.log(centeredAverage([5, 3, 4, 0, 100]));
console.log(centeredAverage([100, 0, 5, 3, 4]));
console.log(centeredAverage([4, 0, 100]));
console.log(centeredAverage([0, 2, 3, 4, 100]));
console.log(centeredAverage([1, 1, 100]));
console.log(centeredAverage([7, 7, 7]));
console.log(centeredAverage([1, 7, 8]));
console.log(centeredAverage([1, 1, 99, 99]));
console.log(centeredAverage([1000, 0, 1, 99]));
console.log(centeredAverage([4, 4, 4, 4, 5]));
console.log(centeredAverage([4, 4, 4, 1, 5]));
console.log(centeredAverage([6, 4, 8, 12, 3]));
