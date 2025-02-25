/**Given an int array length 2, return true if it contains a 2 or a 3. */

function has23(nums) {
  for (let i = 0; i < 2; i++) if (nums[i] === 2 || nums[i] === 3) return true;
  return false;
}
