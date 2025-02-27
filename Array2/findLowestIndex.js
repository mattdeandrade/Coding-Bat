/** Return the index of the minimum value in an array. The input array will have at least one element in it.*/

function findLowestIndex(nums) {
  const index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[index]) index = i;
  }
  return index;
}
