/**We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger. */

function notAlone(nums, val) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === val) nums[i] = Math.max(nums[i - 1], nums[i + 1]);
  }
  return nums;
}

console.log(notAlone([1, 2, 3], 2));
console.log(notAlone([1, 2, 3, 2, 5, 2], 2));
console.log(notAlone([3, 4], 3));
console.log(notAlone([3, 3], 3));
console.log(notAlone([1, 3, 1, 2], 1));
console.log(notAlone([3], 3));
console.log(notAlone([], 3));
console.log(notAlone([7, 1, 6], 1));
console.log(notAlone([1, 1, 1], 1));
console.log(notAlone([1, 1, 1, 2], 1));
