/** Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.*/

function array6(nums, i) {
  const size = nums.length;
  if (i > size) return false;
  if (nums[i] === 6) return true;

  return array6(nums, i + 1);
}

console.log(array6([1, 6, 4], 0));
console.log(array6([1, 4], 0));
console.log(array6([6], 0));
console.log(array6([], 0));
console.log(array6([6, 2, 2], 0));
console.log(array6([2, 5], 0));
console.log(array6([1, 9, 4, 6, 6], 0));
console.log(array6([2, 5, 6], 0));
