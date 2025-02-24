/**Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}. */

function reverse3(nums) {
  const newNums = [];

  for (let i = 0; i < 3; i++) newNums[i] = nums[2 - i];
  return newNums;
}

console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));
console.log(reverse3([2, 1, 2]));
console.log(reverse3([1, 2, 1]));
console.log(reverse3([2, 11, 3]));
console.log(reverse3([0, 6, 5]));
console.log(reverse3([7, 2, 3]));
