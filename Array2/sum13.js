/**Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count. */
function sum13(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 13 && nums[i - 1] !== 13) sum = sum + nums[i];
  }
  return sum;
}

console.log(sum13([1, 2, 2, 1]));
console.log(sum13([1, 1]));
console.log(sum13([1, 2, 2, 1, 13]));
console.log(sum13([1, 2, 13, 2, 1, 13]));
console.log(sum13([13, 1, 2, 13, 2, 1, 13]));
console.log(sum13([13]));
console.log(sum13([13, 13]));
console.log(sum13([13, 0, 13]));
console.log(sum13([13, 1, 13]));
console.log(sum13([5, 7, 2]));
console.log(sum13([5, 13, 2]));
console.log(sum13([0]));
console.log(sum13([13, 0]));
