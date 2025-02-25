/**Given an int array length 2, return true if it does not contain a 2 or 3.

 */

function no23(nums) {
  for (let i = 0; i < 2; i++) if (nums[i] === 2 || nums[i] === 3) return false;
  return true;
}
