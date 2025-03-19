/**We'll say that a positive int n is "endy" if it is in the range 0..10 or 90..100 (inclusive). Given an array of positive ints, return a new array of length "count" containing the first endy numbers from the original array. Decompose out a separate isEndy(int n) method to test if a number is endy. The original array will contain at least "count" endy numbers. */

function copyEndy(nums, count) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++)
    if (isEndy(nums[i]) && count > 0) {
      newArray.push(nums[i]);
      count--;
    }
  return newArray;
}
function isEndy(x) {
  if (x <= 10 && x >= 0) return true;
  if (x >= 90 && x <= 100) return true;
  return false;
}

console.log(copyEndy([9, 11, 90, 22, 6], 2));
console.log(copyEndy([9, 11, 90, 22, 6], 3));
console.log(copyEndy([12, 1, 1, 13, 0, 20], 2));
console.log(copyEndy([12, 1, 1, 13, 0, 20], 3));
console.log(copyEndy([0], 1));
console.log(copyEndy([10, 11, 90], 2));
console.log(copyEndy([90, 22, 100], 2));
console.log(copyEndy([12, 11, 10, 89, 101, 4], 1));
console.log(copyEndy([13, 2, 2, 0], 2));
console.log(copyEndy([13, 2, 2, 0], 3));
console.log(copyEndy([13, 2, 13, 2, 0, 30], 2));
console.log(copyEndy([13, 2, 13, 2, 0, 30], 3));
