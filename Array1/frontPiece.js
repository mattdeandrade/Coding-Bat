/** Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.*/

function frontPiece(nums) {
  if (nums.length <= 2) return nums;
  else return [nums[0], nums[1]];
}
