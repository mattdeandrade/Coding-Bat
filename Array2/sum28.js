/**Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

 */

function sum28(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i] === 2) count++;
  if (count === 4) return true;
  else return false;
}

console.log(sum28([2, 3, 2, 2, 4, 2]));
console.log(sum28([2, 3, 2, 2, 4, 2, 2]));
console.log(sum28([1, 2, 3, 4]));
console.log(sum28([2, 2, 2, 2]));
console.log(sum28([1, 2, 2, 2, 2, 4]));
console.log(sum28([]));
console.log(sum28([2]));
console.log(sum28([8]));
console.log(sum28([2, 2, 2]));
console.log(sum28([2, 2, 2, 2, 2]));
console.log(sum28([1, 2, 2, 1, 2, 2]));
console.log(sum28([5, 2, 2, 2, 4, 2]));
