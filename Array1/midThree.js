/**Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3. */

function midThree(nums) {
  const mid = nums.length / 2 - 0.5;
  return [nums[mid - 1], nums[mid], nums[mid + 1]];
}

console.log(midThree([1, 2, 3, 4, 5]));
console.log(midThree([8, 6, 7, 5, 3, 0, 9]));
console.log(midThree([1, 2, 3]));
