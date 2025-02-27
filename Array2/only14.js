/** Given an array of ints, return true if every element is a 1 or a 4.

*/

function only14(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1 && nums[i] !== 4) return false;
  }
  return true;
}

console.log(only14([1, 4, 1, 4]));
console.log(only14([1, 4, 2, 4]));
console.log(only14([1, 1]));
console.log(only14([1, 4]));
console.log(only14([2]));
console.log(only14([]));
console.log(only14([1, 4, 1, 3]));
console.log(only14([3, 1, 3]));
console.log(only14([1]));
console.log(only14([4]));
console.log(only14([1, 3, 4]));
console.log(only14([1, 1, 1]));
console.log(only14([1, 1, 1, 5]));
console.log(only14([4, 1, 4, 1]));
