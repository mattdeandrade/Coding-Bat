/** Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.*/

function sum67(nums) {
  let inBetween = false;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) inBetween = true;
    else if (inBetween && nums[i] === 7) inBetween = false;
    else if (!inBetween) sum = sum + nums[i];
  }
  return sum;
}

console.log(sum67([1, 2, 2]));
console.log(sum67([1, 2, 2, 6, 99, 99, 7]));
console.log(sum67([1, 1, 6, 7, 2]));
console.log(sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7]));
console.log(sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7]));
console.log(sum67([2, 7, 6, 2, 6, 7, 2, 7]));
console.log(sum67([2, 7, 6, 2, 6, 2, 7]));
console.log(sum67([1, 6, 7, 7]));
console.log(sum67([6, 7, 1, 6, 7, 7]));
console.log(sum67([6, 8, 1, 6, 7]));
console.log(sum67([]));
console.log(sum67([6, 7, 11]));
console.log(sum67([11, 6, 7, 11]));
console.log(sum67([2, 2, 6, 7, 7]));
