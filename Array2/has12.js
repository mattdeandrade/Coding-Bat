/**Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array. */

function has12(nums) {
  let hasOne = false;
  let hasTwoAfter = false;

  for (let i = 0; i < nums.length; i++) {
    if (hasOne && nums[i] === 2) hasTwoAfter = true;
    if (nums[i] === 1) hasOne = true;
  }
  return hasTwoAfter;
}

console.log(has12([1, 3, 2]));
console.log(has12([3, 1, 2]));
console.log(has12([3, 1, 4, 5, 2]));
console.log(has12([3, 1, 4, 5, 6]));
console.log(has12([3, 1, 4, 1, 6, 2]));
console.log(has12([2, 1, 4, 1, 6, 2]));
console.log(has12([2, 1, 4, 1, 6]));
console.log(has12([1]));
console.log(has12([2, 1, 3]));
console.log(has12([2, 1, 3, 2]));
console.log(has12([2]));
console.log(has12([3, 2]));
console.log(has12([3, 1, 3, 2]));
console.log(has12([3, 5, 9]));
console.log(has12([3, 5, 1]));
console.log(has12([3, 2, 1]));
console.log(has12([1, 2]));
