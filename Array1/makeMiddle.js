/** Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.*/

function makeMiddle(nums) {
  const newArray = [];
  const size = nums.length;
  newArray.push(nums[size / 2 - 1]);
  newArray.push(nums[size / 2]);
  return newArray;
}

console.log(makeMiddle([1, 2, 3, 4]));
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
console.log(makeMiddle([1, 2]));
console.log(makeMiddle([5, 2, 4, 7]));
console.log(makeMiddle([9, 0, 4, 3, 9, 1]));
