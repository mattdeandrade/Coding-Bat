/** Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.*/

function swapEnds(nums) {
  let swap = nums[0];
  const newArray = [];
  for (let i = 0; i < nums.length; i++) newArray.push(nums[i]);
  newArray[0] = nums[nums.length - 1];
  newArray[nums.length - 1] = swap;
  return newArray;
}

console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));
console.log(swapEnds([3, 1, 4, 1, 5, 9]));
console.log(swapEnds([1, 2]));
console.log(swapEnds([1]));
