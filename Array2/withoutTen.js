/**Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array. */
function withoutTen(nums) {
  const newArray = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === 10) {
      count++;
      newArray.push(0);
    }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 10) newArray.unshift(nums[i]);
  }
  return newArray;
}

console.log(withoutTen([1, 10, 10, 2]));
console.log(withoutTen([10, 2, 10]));
console.log(withoutTen([1, 99, 10]));
console.log(withoutTen([10, 13, 10, 14]));
console.log(withoutTen([10, 13, 10, 14, 10]));
console.log(withoutTen([10, 10, 3]));
console.log(withoutTen([1]));
console.log(withoutTen([13, 1]));
console.log(withoutTen([10]));
console.log(withoutTen([]));
