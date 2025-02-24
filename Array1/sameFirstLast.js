/**Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal. */

function sameFirstLast(nums) {
  if (nums.length === 0) return false;
  if (nums[0] === nums[nums.length - 1]) return true;
  return false;
}
