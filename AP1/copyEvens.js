/**Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers. */

function copyEvens(nums, count) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++)
    if (count > 0 && nums[i] % 2 === 0) {
      newArray.push(nums[i]);
      count--;
    }
  return newArray;
}

console.log(copyEvens([3, 2, 4, 5, 8], 2));
console.log(copyEvens([3, 2, 4, 5, 8], 3));
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3));
console.log(copyEvens([6, 1, 2, 4, 5, 8], 4));
console.log(copyEvens([3, 1, 4, 1, 5], 1));
console.log(copyEvens([2], 1));
console.log(copyEvens([6, 2, 4, 8], 2));
console.log(copyEvens([6, 2, 4, 8], 3));
console.log(copyEvens([6, 2, 4, 8], 4));
console.log(copyEvens([1, 8, 4], 1));
console.log(copyEvens([1, 8, 4], 2));
console.log(copyEvens([2, 8, 4], 2));
