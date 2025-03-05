/** (This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.*/

function fix45(nums) {
  const swapKeys = [];
  const size = nums.length;
  for (let i = 0; i < size; i++)
    if (nums[i] === 4 && nums[i + 1] !== 5) swapKeys.push(nums[i + 1]);

  for (let i = 0; i < size; i++) {
    if (nums[i] === 5 && nums[i - 1] !== 4) nums[i] = swapKeys.pop();
    if (nums[i] === 4 && nums[i + 1] !== 5) nums[i + 1] = 5;
  }
  return nums;
}

console.log(fix45([5, 4, 9, 4, 9, 5]));
console.log(fix45([1, 4, 1, 5]));
console.log(fix45([1, 4, 1, 5, 5, 4, 1]));
console.log(fix45([4, 9, 4, 9, 5, 5, 4, 9, 5]));
console.log(fix45([5, 5, 4, 1, 4, 1]));
console.log(fix45([4, 2, 2, 5]));
console.log(fix45([4, 2, 4, 2, 5, 5]));
console.log(fix45([4, 2, 4, 5, 5]));
console.log(fix45([1, 1, 1]));
console.log(fix45([4, 5]));
console.log(fix45([5, 4, 1]));
console.log(fix45([]));
console.log(fix45([5, 4, 5, 4, 1]));
console.log(fix45([4, 5, 4, 1, 5]));
console.log(fix45([3, 4, 5]));
console.log(fix45([4, 1, 5]));
console.log(fix45([5, 4, 1]));
console.log(fix45([2, 4, 2, 5]));
