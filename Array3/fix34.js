/** Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.*/

function fix34(nums) {
  const size = nums.length;
  let swap = 0;
  for (let i = 0; i < size; i++) {
    if (nums[i] === 3 && nums[i + 1] !== 4) {
      swap = nums[i + 1];
      nums[i + 1] = 4;
    }
    if (nums[i] === 4 && nums[i - 1] !== 3) nums[i] = swap;
  }
  return nums;
}

console.log(fix34([1, 3, 1, 4]));
console.log(fix34([1, 3, 1, 4, 4, 3, 1]));
console.log(fix34([3, 2, 2, 4]));
console.log(fix34([3, 2, 3, 2, 4, 4]));
console.log(fix34([2, 3, 2, 3, 2, 4, 4]));
console.log(fix34([5, 3, 5, 4, 5, 4, 5, 4, 3, 5, 3, 5]));
console.log(fix34([3, 1, 4]));
console.log(fix34([3, 4, 1]));
console.log(fix34([1, 1, 1]));
console.log(fix34([1]));
console.log(fix34([]));
console.log(fix34([7, 3, 7, 7, 4]));
console.log(fix34([3, 1, 4, 3, 1, 4]));
console.log(fix34([3, 1, 1, 3, 4, 4]));
