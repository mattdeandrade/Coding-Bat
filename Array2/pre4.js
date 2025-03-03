/**Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0. */

function pre4(nums) {
  const newArray = [];
  const first4 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4) first4 = true;
    if (!first4) newArray.push(nums[i]);
  }
  return newArray;
}

console.log(pre4([1, 2, 4, 1]));
console.log(pre4([3, 1, 4]));
console.log(pre4([1, 4, 4]));
console.log(pre4([1, 4, 4, 2]));
console.log(pre4([1, 3, 4, 2, 4]));
console.log(pre4([4, 4]));
console.log(pre4([3, 3, 4]));
console.log(pre4([1, 2, 1, 4]));
console.log(pre4([2, 1, 4, 2]));
console.log(pre4([2, 1, 2, 1, 4, 2]));
