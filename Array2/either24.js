/**
 * Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.
 */

function either24(nums) {
  let twoCount = false;
  let fourCount = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) twoCount = true;
    if (nums[i] === 4 && nums[i + 1] === 4) fourCount = true;
  }

  if (twoCount && fourCount) return false;
  if (twoCount) return true;
  if (fourCount) return true;
  return false;
}

console.log(either24([1, 2, 2]));
console.log(either24([4, 4, 1]));
console.log(either24([4, 4, 1, 2, 2]));
console.log(either24([1, 2, 3, 4]));
console.log(either24([3, 5, 9]));
console.log(either24([1, 2, 3, 4, 4]));
console.log(either24([2, 2, 3, 4]));
console.log(either24([1, 2, 3, 2, 2, 4]));
console.log(either24([1, 2, 3, 2, 2, 4, 4]));
console.log(either24([1, 2]));
console.log(either24([2, 2]));
console.log(either24([4, 4]));
console.log(either24([]));
console.log(either24([2]));
