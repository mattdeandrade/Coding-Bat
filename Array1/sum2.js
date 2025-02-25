/** Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0. */

function sum2(nums) {
  let sum = 0;
  for (let i = 0; i < 2; i++) if (!nums[i].isNaN) sum = sum + nums[i];
  return sum;
}

console.log(sum2([1, 2, 3]));
console.log(sum2([1, 1]));
console.log(sum2([1, 1, 1, 1]));
console.log(sum2([1, 2]));
