/** We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.*/

function isEverywhere(nums, val) {
  if (nums.length === 1 || nums.length === 0) return true;
  if (nums[0] === val) {
    for (let i = 2; i < nums.length; i = i + 2)
      if (nums[i] !== val) return false;
    return true;
  }
  if (nums[1] === val) {
    for (let i = 3; i < nums.length; i = i + 2)
      if (nums[i] !== val) return false;
    return true;
  }
  return false;
}

console.log(isEverywhere([1, 2, 1, 3], 1));
console.log(isEverywhere([1, 2, 1, 3], 2));
console.log(isEverywhere([1, 2, 1, 3, 4], 1));
console.log(isEverywhere([2, 1, 2, 1], 1));
console.log(isEverywhere([2, 1, 2, 1], 2));
console.log(isEverywhere([2, 1, 2, 3, 1], 2));
console.log(isEverywhere([3, 1], 3));
console.log(isEverywhere([3, 1], 2));
console.log(isEverywhere([3], 1));
console.log(isEverywhere([], 1));
console.log(isEverywhere([1, 2, 1, 2, 3, 2, 5], 2));
console.log(isEverywhere([1, 2, 1, 1, 1, 2], 2));
console.log(isEverywhere([2, 1, 2, 1, 1, 2], 2));
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 1, 2], 2));
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 2, 1], 2));
console.log(isEverywhere([2, 1, 2, 1, 2], 2));
