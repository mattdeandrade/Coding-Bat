/**Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. */

function makeLast(nums) {
  const size = nums.length * 2;
  const newArray = [nums[nums.length - 1]];
  for (let i = 0; i < size - 1; i++) newArray.unshift(0);
  return newArray;
}

console.log(makeLast([4, 5, 6]));
console.log(makeLast([1, 2]));
console.log(makeLast([3]));
console.log(makeLast([0]));
console.log(makeLast([7, 7, 7]));
console.log(makeLast([3, 1, 4]));
console.log(makeLast([1, 2, 3, 4]));
console.log(makeLast([1, 2, 3, 0]));
console.log(makeLast([2, 4]));
