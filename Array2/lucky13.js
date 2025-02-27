/**Given an array of ints, return true if the array contains no 1's and no 3's.

 */
function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) return false;
    if (nums[i] === 3) return false;
  }
  return true;
}
