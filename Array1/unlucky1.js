/**We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array. */

function unlucky1(nums) {
  const size = nums.length;
  if (nums[0] === 1 && nums[1] === 3) return true;
  if (nums[1] === 1 && nums[2] === 3) return true;
  if (nums[size - 2] === 1 && nums[size - 1] === 3) return true;
  return false;
}

console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));
console.log(unlucky1([1, 3, 1]));
console.log(unlucky1([1, 1, 3]));
console.log(unlucky1([1, 2, 3]));
console.log(unlucky1([3, 3, 3]));
console.log(unlucky1([1, 3]));
console.log(unlucky1([1, 4]));
console.log(unlucky1([1]));
console.log(unlucky1([]));
console.log(unlucky1([1, 1, 1, 3, 1]));
console.log(unlucky1([1, 1, 3, 1, 1]));
console.log(unlucky1([1, 1, 1, 1, 3]));
console.log(unlucky1([1, 4, 1, 5]));
console.log(unlucky1([1, 1, 2, 3]));
console.log(unlucky1([2, 3, 2, 1]));
console.log(unlucky1([2, 3, 1, 3]));
console.log(unlucky1([1, 2, 3, 4, 1, 3]));
