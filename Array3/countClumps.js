/**Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array. */

function countClumps(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const clump = nums[i];
    if (clump === nums[i - 1] && clump !== nums[i + 1]) count++;
  }
  return count;
}

console.log(countClumps([1, 2, 2, 3, 4, 4]));
console.log(countClumps([1, 1, 2, 1, 1]));
console.log(countClumps([1, 1, 1, 1, 1]));
console.log(countClumps([1, 2, 3]));
console.log(countClumps([2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]));
console.log(countClumps([]));
